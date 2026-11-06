import React, { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaCheckCircle, FaSave } from "react-icons/fa";
import {
  createQuestion,
  fetchAllQuestions,
  deleteQuestion,
  updateQuizSettings,
  advanceToNextQuiz,
} from "./quizApi";
import QuizBackground from "./QuizBackground";
import "./Quiz.css";

const QuizAdmin = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [settingsError, setSettingsError] = useState("");
  const [settingsSuccess, setSettingsSuccess] = useState("");
  const [questionError, setQuestionError] = useState("");
  const [questionSuccess, setQuestionSuccess] = useState("");
  const [advancingQuiz, setAdvancingQuiz] = useState(false);
  const [quizConfig, setQuizConfig] = useState({
    questionCount: 10,
    durationMs: 300000,
    currentQuizNumber: 1,
  });
  const [editingConfig, setEditingConfig] = useState(false);
  const [tempConfig, setTempConfig] = useState({
    questionCount: 10,
    durationMinutes: 5,
  });

  const [formData, setFormData] = useState({
    prompt: "",
    option1: "",
    option2: "",
    option3: "",
    option4: "",
    correctIndex: 0,
    category: "Finance",
  });

  const exceedsAvailableQuestions = tempConfig.questionCount > questions.length;

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    setLoading(true);
    try {
      const data = await fetchAllQuestions();
      setQuestions(data.questions || []);
      if (data.config) {
        setQuizConfig(data.config);
        setTempConfig({
          questionCount: data.config.questionCount,
          durationMinutes: Math.floor(data.config.durationMs / 60000),
        });
      }
    } catch (err) {
      console.error("Failed to load questions:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "correctIndex" ? parseInt(value, 10) : value,
    }));
  };

  const handleConfigChange = (e) => {
    const { name, value } = e.target;
    setTempConfig((prev) => ({
      ...prev,
      [name]: parseInt(value, 10),
    }));
  };

  const handleSaveConfig = async () => {
    setSettingsError("");
    setSettingsSuccess("");

    if (exceedsAvailableQuestions) {
      setSettingsError(
        `Question count cannot exceed available questions (${questions.length}).`
      );
      return;
    }

    try {
      const durationMs = tempConfig.durationMinutes * 60000;
      await updateQuizSettings(tempConfig.questionCount, durationMs);
      setSettingsSuccess("Quiz settings updated!");
      setEditingConfig(false);
      loadQuestions();
    } catch (err) {
      setSettingsError(err.message || "Failed to update settings.");
    }
  };

  const handleCreateQuestion = async (e) => {
    e.preventDefault();
    setQuestionError("");
    setQuestionSuccess("");

    const { prompt, option1, option2, option3, option4, correctIndex, category } = formData;

    if (!prompt.trim() || !option1.trim() || !option2.trim() || !option3.trim() || !option4.trim()) {
      setQuestionError("All fields are required.");
      return;
    }

    try {
      await createQuestion({
        prompt: prompt.trim(),
        options: [option1.trim(), option2.trim(), option3.trim(), option4.trim()],
        correctIndex,
        category,
      });

      setQuestionSuccess("Question created successfully!");
      setFormData({
        prompt: "",
        option1: "",
        option2: "",
        option3: "",
        option4: "",
        correctIndex: 0,
        category: "Finance",
      });

      loadQuestions();
    } catch (err) {
      setQuestionError(err.message || "Failed to create question.");
    }
  };

  const handleDeleteQuestion = async (id) => {
    if (!window.confirm("Delete this question?")) return;

    setQuestionError("");
    setQuestionSuccess("");
    try {
      await deleteQuestion(id);
      setQuestionSuccess("Question deleted.");
      loadQuestions();
    } catch (err) {
      setQuestionError(err.message || "Failed to delete question.");
    }
  };

  const handleAdvanceQuiz = async () => {
    const confirmed = window.confirm(
      "Advance to next quiz? New attempts will be saved under a new leaderboard."
    );
    if (!confirmed) return;

    setSettingsError("");
    setSettingsSuccess("");
    setAdvancingQuiz(true);

    try {
      const response = await advanceToNextQuiz();
      setQuizConfig((prev) => ({
        ...prev,
        currentQuizNumber: response.currentQuizNumber || prev.currentQuizNumber + 1,
      }));
      setSettingsSuccess(
        `Advanced successfully. Current quiz is ${response.currentQuizLabel || `Quiz ${response.currentQuizNumber}`}.`
      );
      await loadQuestions();
    } catch (err) {
      setSettingsError(err.message || "Failed to advance quiz.");
    } finally {
      setAdvancingQuiz(false);
    }
  };

  return (
    <div className="quiz-shell">
      <QuizBackground count={20} />
      <div className="quiz-container">
        <h1 className="quiz-title">Admin Panel</h1>
        <p className="quiz-subtitle">Create and manage quiz questions. All changes apply in real time.</p>

        <div className="quiz-card">
          <h2 style={{ color: "var(--quiz-gold-600)", marginBottom: "12px" }}>Quiz Settings</h2>
          
          {!editingConfig ? (
            <>
              <div className="quiz-grid" style={{ marginBottom: "16px" }}>
                <div>
                  <p style={{ color: "var(--quiz-muted)", fontSize: "0.9rem", marginBottom: "6px" }}>Questions per Quiz</p>
                  <p style={{ color: "var(--quiz-gold-400)", fontSize: "1.4rem", fontWeight: "600" }}>
                    {quizConfig.questionCount}
                  </p>
                </div>
                <div>
                  <p style={{ color: "var(--quiz-muted)", fontSize: "0.9rem", marginBottom: "6px" }}>Quiz Duration</p>
                  <p style={{ color: "var(--quiz-gold-400)", fontSize: "1.4rem", fontWeight: "600" }}>
                    {Math.floor(quizConfig.durationMs / 60000)} minutes
                  </p>
                </div>
                <div>
                  <p style={{ color: "var(--quiz-muted)", fontSize: "0.9rem", marginBottom: "6px" }}>Current Quiz Round</p>
                  <p style={{ color: "var(--quiz-gold-400)", fontSize: "1.4rem", fontWeight: "600" }}>
                    Quiz {quizConfig.currentQuizNumber || 1}
                  </p>
                </div>
              </div>
              <div className="quiz-actions">
                <button className="quiz-button ghost" onClick={() => setEditingConfig(true)}>
                  Edit Settings
                </button>
                <button className="quiz-button gold" onClick={handleAdvanceQuiz} disabled={advancingQuiz}>
                  {advancingQuiz ? "Advancing..." : "Advance To Next Quiz"}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="quiz-grid" style={{ marginBottom: "16px" }}>
                <div>
                  <label style={{ color: "var(--quiz-muted)", fontSize: "0.9rem", display: "block", marginBottom: "6px" }}>
                    Questions per Quiz
                  </label>
                  <input
                    className="quiz-input"
                    type="number"
                    name="questionCount"
                    min="1"
                    max="100"
                    value={tempConfig.questionCount}
                    onChange={handleConfigChange}
                  />
                  {exceedsAvailableQuestions && (
                    <div className="quiz-alert" style={{ marginTop: "8px" }}>
                      You only have {questions.length} questions. Reduce this value or add more questions.
                    </div>
                  )}
                </div>
                <div>
                  <label style={{ color: "var(--quiz-muted)", fontSize: "0.9rem", display: "block", marginBottom: "6px" }}>
                    Duration (minutes)
                  </label>
                  <input
                    className="quiz-input"
                    type="number"
                    name="durationMinutes"
                    min="1"
                    max="120"
                    value={tempConfig.durationMinutes}
                    onChange={handleConfigChange}
                  />
                </div>
              </div>
              {settingsError && <div className="quiz-alert" style={{ marginTop: "12px" }}>{settingsError}</div>}
              {settingsSuccess && <div className="quiz-alert" style={{ marginTop: "12px", color: "#b4ffb4" }}>{settingsSuccess}</div>}
              <div className="quiz-actions">
                <button
                  className="quiz-button gold"
                  onClick={handleSaveConfig}
                  disabled={exceedsAvailableQuestions}
                >
                  <FaSave style={{ marginRight: "8px" }} />
                  Save Settings
                </button>
                <button className="quiz-button ghost" onClick={() => setEditingConfig(false)}>
                  Cancel
                </button>
              </div>
            </>
          )}
        </div>

        <div className="quiz-card" style={{ marginTop: "28px" }}>
          <h2 style={{ color: "var(--quiz-gold-600)", marginBottom: "16px" }}>Create New Question</h2>
          <form onSubmit={handleCreateQuestion}>
            <div className="quiz-grid" style={{ marginBottom: "16px" }}>
              <input
                className="quiz-input"
                type="text"
                name="prompt"
                placeholder="Question prompt"
                value={formData.prompt}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="quiz-grid" style={{ marginBottom: "16px" }}>
              <input
                className="quiz-input"
                type="text"
                name="option1"
                placeholder="Option 1"
                value={formData.option1}
                onChange={handleInputChange}
                required
              />
              <input
                className="quiz-input"
                type="text"
                name="option2"
                placeholder="Option 2"
                value={formData.option2}
                onChange={handleInputChange}
                required
              />
              <input
                className="quiz-input"
                type="text"
                name="option3"
                placeholder="Option 3"
                value={formData.option3}
                onChange={handleInputChange}
                required
              />
              <input
                className="quiz-input"
                type="text"
                name="option4"
                placeholder="Option 4"
                value={formData.option4}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="quiz-grid" style={{ marginBottom: "16px" }}>
              <select className="quiz-input" name="correctIndex" value={formData.correctIndex} onChange={handleInputChange}>
                <option value={0}>Correct: Option 1</option>
                <option value={1}>Correct: Option 2</option>
                <option value={2}>Correct: Option 3</option>
                <option value={3}>Correct: Option 4</option>
              </select>

              <input
                className="quiz-input"
                type="text"
                name="category"
                placeholder="Category (e.g., Finance)"
                value={formData.category}
                onChange={handleInputChange}
              />
            </div>

            {questionError && <div className="quiz-alert">{questionError}</div>}
            {questionSuccess && <div className="quiz-alert" style={{ color: "#b4ffb4" }}>{questionSuccess}</div>}

            <button type="submit" className="quiz-button gold" style={{ marginTop: "12px" }}>
              <FaPlus style={{ marginRight: "8px" }} />
              Create Question
            </button>
          </form>
        </div>

        <div className="quiz-card" style={{ marginTop: "28px" }}>
          <h2 style={{ color: "var(--quiz-gold-600)", marginBottom: "16px" }}>
            Existing Questions ({questions.length})
          </h2>

          {loading && <p style={{ color: "var(--quiz-muted)" }}>Loading...</p>}

          {!loading && questions.length === 0 && (
            <p style={{ color: "var(--quiz-muted)" }}>No questions yet. Create one above.</p>
          )}

          {!loading && questions.length > 0 && (
            <div style={{ display: "grid", gap: "16px" }}>
              {questions.map((q, index) => (
                <div
                  key={q.id}
                  style={{
                    padding: "18px",
                    borderRadius: "16px",
                    background: "rgba(6, 23, 16, 0.8)",
                    border: "1px solid rgba(92, 146, 44, 0.2)",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontWeight: "600", marginBottom: "8px", color: "var(--quiz-gold-400)" }}>
                        {index + 1}. {q.prompt}
                      </p>
                      <div style={{ display: "grid", gap: "6px", marginBottom: "8px" }}>
                        {q.options.map((opt, i) => (
                          <div
                            key={i}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "8px",
                              color: i === q.correctIndex ? "#b4ffb4" : "var(--quiz-muted)",
                            }}
                          >
                            {i === q.correctIndex && <FaCheckCircle />}
                            <span>
                              {String.fromCharCode(65 + i)}. {opt}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: "0.85rem", color: "var(--quiz-muted)" }}>
                        {q.category}
                      </p>
                    </div>
                    <button
                      className="quiz-button ghost"
                      style={{ padding: "8px 12px", fontSize: "0.9rem" }}
                      onClick={() => handleDeleteQuestion(q.id)}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizAdmin;
