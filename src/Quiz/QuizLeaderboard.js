import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLeaderboard, getLeaderboardQuizzes, streamLeaderboard } from "./quizApi";
import QuizBackground from "./QuizBackground";
import "./Quiz.css";

const FULL_LEADERBOARD_LIMIT = "all";

const formatDuration = (ms) => {
  const clamped = Math.max(0, ms);
  const minutes = Math.floor(clamped / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  const milliseconds = Math.floor(clamped % 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds
  ).padStart(3, "0")}`;
};

const QuizLeaderboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [entries, setEntries] = useState([]);
  const [quizzes, setQuizzes] = useState([]);
  const [quizNumber, setQuizNumber] = useState(1);
  const [quizLabel, setQuizLabel] = useState("Quiz 1");
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(false);
  const [streamActive, setStreamActive] = useState(true);
  const [loadError, setLoadError] = useState("");
  const sessionId = localStorage.getItem("quizSessionId");

  useEffect(() => {
    let mounted = true;

    const hydrate = async () => {
      setLoading(true);
      setLoadError("");

      try {
        const quizData = await getLeaderboardQuizzes();
        if (!mounted) return;

        const available = quizData.quizzes || [];
        const requestedQuiz = Number(location.state?.quizNumber);
        const defaultQuizNumber = quizData.currentQuizNumber || 1;

        const selectedQuizNumber =
          requestedQuiz && available.some((quiz) => quiz.quizNumber === requestedQuiz)
            ? requestedQuiz
            : defaultQuizNumber;

        setQuizzes(available);
        setQuizNumber(selectedQuizNumber);
      } catch (error) {
        if (!mounted) return;
        setLoadError("Unable to load quiz leaderboard history.");
        setLoading(false);
      }
    };

    hydrate();

    return () => {
      mounted = false;
    };
  }, [location.state]);

  useEffect(() => {
    let mounted = true;
    if (!quizNumber) return;

    setLoading(true);
    setLoadError("");

    getLeaderboard(FULL_LEADERBOARD_LIMIT, quizNumber)
      .then((data) => {
        if (!mounted) return;
        setEntries(data.entries || []);
        setQuizLabel(data.quizLabel || `Quiz ${quizNumber}`);
        setVisible(true);
      })
      .catch(() => {
        if (!mounted) return;
        setLoadError("Unable to load this leaderboard.");
      })
      .finally(() => {
        if (mounted) {
          setLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [quizNumber]);

  useEffect(() => {
    let eventSource;
    if (streamActive && quizNumber) {
      eventSource = streamLeaderboard(
        (data) => {
          setEntries(data.entries || []);
          setQuizLabel(data.quizLabel || `Quiz ${quizNumber}`);
        },
        () => {
          setStreamActive(false);
        },
        quizNumber,
        FULL_LEADERBOARD_LIMIT
      );
    }

    return () => {
      if (eventSource) {
        eventSource.close();
      }
    };
  }, [streamActive, quizNumber]);

  useEffect(() => {
    if (streamActive) return;
    const interval = setInterval(() => {
      getLeaderboard(FULL_LEADERBOARD_LIMIT, quizNumber)
        .then((data) => {
          setEntries(data.entries || []);
          setQuizLabel(data.quizLabel || `Quiz ${quizNumber}`);
        })
        .catch(() => undefined);
    }, 5000);

    return () => clearInterval(interval);
  }, [streamActive, quizNumber]);

  return (
    <div className="quiz-shell">
      <QuizBackground count={20} />
      <div className="quiz-container">
        <h1 className="quiz-title">{quizLabel} Leaderboard</h1>
        <p className="quiz-subtitle">Sorted by score, then fastest completion time.</p>

        <div className="quiz-card">
          <div className="quiz-history-toolbar">
            <label htmlFor="leaderboard-quiz-select" className="quiz-history-label">
              Leaderboard History
            </label>
            <select
              id="leaderboard-quiz-select"
              className="quiz-input"
              value={quizNumber}
              onChange={(event) => {
                setQuizNumber(Number(event.target.value));
                setStreamActive(true);
              }}
              disabled={!quizzes.length}
            >
              {quizzes.map((quiz) => (
                <option key={quiz.quizNumber} value={quiz.quizNumber}>
                  {quiz.quizLabel}
                </option>
              ))}
            </select>
          </div>

          {loadError ? <div className="quiz-alert">{loadError}</div> : null}

          {loading ? (
            <div>Loading leaderboard...</div>
          ) : (
            <div className={`quiz-leaderboard ${visible ? "visible" : ""}`}>
              <div className="quiz-leaderboard-header">
                <span>Rank</span>
                <span>Player</span>
                <span>Score</span>
                <span>Time</span>
              </div>
              {!entries.length ? (
                <div className="quiz-history-empty">No attempts recorded for this quiz yet.</div>
              ) : null}
              {entries.map((entry, index) => (
                <div
                  key={entry.sessionId}
                  className={`quiz-leaderboard-row ${entry.sessionId === sessionId ? "highlight" : ""} animate`}
                >
                  <span>#{index + 1}</span>
                  <span>
                    {entry.playerName}
                    {entry.sessionId === sessionId && <span className="quiz-badge">You</span>}
                  </span>
                  <span>
                    {entry.score}/{entry.totalQuestions}
                  </span>
                  <span>{formatDuration(entry.timeTakenMs)}</span>
                </div>
              ))}
            </div>
          )}

          <div className="quiz-actions" style={{ marginTop: "20px" }}>
            <button className="quiz-button ghost" onClick={() => navigate("/quiz")}>
              Start Or Resume Quiz
            </button>
            <button className="quiz-button" onClick={() => navigate("/")}>Back to Home</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizLeaderboard;
