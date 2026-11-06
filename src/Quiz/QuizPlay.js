import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChartLine, FaCoins, FaGem, FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GiMoneyStack, GiProfit } from "react-icons/gi";
import { getSession, submitQuiz } from "./quizApi";
import QuizBackground from "./QuizBackground";
import "./Quiz.css";

const formatDuration = (ms) => {
  const clamped = Math.max(0, ms);
  const minutes = Math.floor(clamped / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  const milliseconds = Math.floor(clamped % 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds
  ).padStart(3, "0")}`;
};

const QuizPlay = () => {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [remainingMs, setRemainingMs] = useState(0);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [showCongrats, setShowCongrats] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [session, setSession] = useState(null);
  const [showRules, setShowRules] = useState(false);
  const submittedRef = useRef(false);

  const burstIcons = useMemo(() => [FaStar, FaGem, FaCoins, FaChartLine, GiProfit, GiMoneyStack], []);

  useEffect(() => {
    const sessionId = localStorage.getItem("quizSessionId");
    if (!sessionId) {
      navigate("/quiz", { state: { error: "Start a new quiz session first." } });
      return;
    }

    let mounted = true;
    const hydrate = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await getSession(sessionId);
        if (!mounted) return;
        setSession(data);
        setQuestions(data.questions || []);
        setRemainingMs(Math.max(0, data.expiresAt - data.serverTime));
        const savedAnswers = localStorage.getItem("quizAnswers");
        if (savedAnswers) {
          setAnswers(JSON.parse(savedAnswers));
        }
      } catch (err) {
        if (err.message && err.message.toLowerCase().includes("submitted")) {
          navigate("/quiz/leaderboard");
          return;
        }
        localStorage.removeItem("quizSessionId");
        navigate("/quiz", { state: { error: "Session expired. Please start again." } });
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    };

    hydrate();

    return () => {
      mounted = false;
    };
  }, [navigate]);

    const handleSubmit = useCallback(async (auto = false) => {
    if (submittedRef.current) return;

    if (!auto) {
      const unansweredIndex = questions.findIndex((question) => answers[question.id] === undefined);
      if (unansweredIndex !== -1) {
        setCurrentIndex(unansweredIndex);
        setError("");
        return;
      }
    }

    setSubmitting(true);
    setError("");
    submittedRef.current = true;

    const payload = {
      sessionId: session.sessionId,
      answers: questions.map((question) => ({
        questionId: question.id,
        optionIndex: answers[question.id] ?? -1,
      })),
    };

    try {
      const result = await submitQuiz(payload);
      localStorage.setItem("quizResult", JSON.stringify(result));
      setShowCongrats(true);
      setTimeout(() => {
        navigate("/quiz/result");
      }, 1800);
    } catch (err) {
      submittedRef.current = false;
      setError(err.message || "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  }, [questions, answers, session, navigate]);



  useEffect(() => {
    if (!session) return;

    const offset = session.serverTime - Date.now();
    let rafId;

    const tick = () => {
      const now = Date.now() + offset;
      const remaining = Math.max(0, session.expiresAt - now);
      setRemainingMs(remaining);
      if (remaining <= 0 && !submittedRef.current) {
        handleSubmit(true);
        return;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [session, handleSubmit]);

  useEffect(() => {
    localStorage.setItem("quizAnswers", JSON.stringify(answers));
  }, [answers]);

  const handleSelect = (questionId, optionIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex,
    }));
  };



  if (loading) {
    return (
      <div className="quiz-shell">
        <div className="quiz-container">
          <div className="quiz-card">Loading your session...</div>
        </div>
      </div>
    );
  }

  const current = questions[currentIndex];
  const isUrgent = remainingMs <= 15000;
  const elapsedMs = session ? Math.min(session.durationMs, session.durationMs - remainingMs) : 0;
  const allAnswered = questions.length > 0 && questions.every((question) => answers[question.id] !== undefined);

  return (
    <div className={`quiz-shell ${isUrgent ? "urgent" : ""}`}>
      <QuizBackground count={20} />
      <div className="quiz-alarm" />
      <div className="quiz-container">
        <div className="quiz-card">
          <div className="quiz-progress">
            <div>
              Question <strong>{currentIndex + 1}</strong> of <strong>{questions.length}</strong>
            </div>
            <div className="quiz-timer">
              <div className="quiz-timer-block">
                <span className="quiz-timer-label">Elapsed</span>
                <span>{formatDuration(elapsedMs)}</span>
              </div>
              <div className="quiz-timer-block">
                <span className="quiz-timer-label">Time Left</span>
                <span>{formatDuration(remainingMs)}</span>
              </div>
            </div>
          </div>

          <div className="quiz-rules-toggle">
            <button
              className="quiz-rules-toggle-button"
              onClick={() => setShowRules(!showRules)}
            >
              {showRules ? <FaChevronUp /> : <FaChevronDown />}
              <span>Rules & Instructions</span>
            </button>
            {showRules && (
              <div className="quiz-rules quiz-rules-expanded">
                <div className="quiz-rule">
                  <span>01</span> Answer all questions before you can submit.
                </div>
                <div className="quiz-rule">
                  <span>02</span> Randomized finance questions are locked to your session.
                </div>
                <div className="quiz-rule">
                  <span>03</span> Server time controls the timer down to milliseconds.
                </div>
                <div className="quiz-rule">
                  <span>04</span> One submission per session. Refreshing will not reset anything.
                </div>
                <div className="quiz-rule">
                  <span>05</span> Leaderboard ranks by score, then by fastest completion time.
                </div>
              </div>
            )}
          </div>

          <div className="quiz-question">{current?.prompt}</div>

          <div className="quiz-options">
            {current?.options.map((option, index) => (
              <label
                key={`${current.id}-${index}`}
                className={`quiz-option ${answers[current.id] === index ? "selected" : ""}`}
              >
                <input
                  type="radio"
                  name={`question-${current.id}`}
                  checked={answers[current.id] === index}
                  onChange={() => handleSelect(current.id, index)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          {error && <div className="quiz-alert">{error}</div>}

          <div className="quiz-footer">
            <div className="quiz-actions">
              <button
                className="quiz-button ghost"
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
              >
                Previous
              </button>
              <button
                className="quiz-button"
                onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questions.length - 1))}
                disabled={currentIndex === questions.length - 1}
              >
                Next
              </button>
            </div>

            <button
              className="quiz-button gold"
              onClick={() => handleSubmit(false)}
              disabled={submitting || !allAnswered}
            >
              {submitting ? "Submitting..." : "Submit Quiz"}
            </button>
          </div>
        </div>
      </div>

      {showCongrats && (
        <div className="quiz-popup-overlay">
          <div className="quiz-popup">
            <div className="quiz-burst">
              {burstIcons.map((Icon, index) => (
                <span
                  key={`burst-${index}`}
                  style={{
                    "--burst-x": `${(index - 2) * 40}px`,
                    "--burst-y": `${index % 2 === 0 ? -40 : 50}px`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <Icon />
                </span>
              ))}
            </div>
            <h2>Quiz Complete</h2>
            <p>Locking your score on the leaderboard...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuizPlay;
