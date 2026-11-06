import React, { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaChartLine, FaCoins, FaLandmark, FaPiggyBank, FaWallet } from "react-icons/fa";
import { GiReceiveMoney, GiPayMoney, GiStack } from "react-icons/gi";
import { startQuiz, getSession, getLeaderboard, getLeaderboardQuizzes } from "./quizApi";
import "./Quiz.css";

const floatingIcons = [
  FaChartLine,
  FaCoins,
  FaLandmark,
  FaPiggyBank,
  FaWallet,
  GiReceiveMoney,
  GiPayMoney,
  GiStack,
];

const buildFloatingIconProps = (count) => {
  return Array.from({ length: count }, (_, index) => {
    const x = `${10 + (index * 11) % 80}%`;
    const y = `${8 + (index * 13) % 80}%`;
    const size = `${24 + (index % 4) * 12}px`;
    const delay = `${(index % 6) * -1.2}s`;
    return { x, y, size, delay, twinkle: index % 2 === 0 };
  });
};

const formatDuration = (ms) => {
  const clamped = Math.max(0, ms || 0);
  const minutes = Math.floor(clamped / 60000);
  const seconds = Math.floor((clamped % 60000) / 1000);
  const milliseconds = Math.floor(clamped % 1000);
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(
    milliseconds
  ).padStart(3, "0")}`;
};

const QuizLanding = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [accessCode, setAccessCode] = useState("");
  const [accessError, setAccessError] = useState("");
  const [accessGranted, setAccessGranted] = useState(
    () => sessionStorage.getItem("quizAccessGranted") === "true"
  );
  const [adminCode, setAdminCode] = useState("");
  const [adminError, setAdminError] = useState("");
  const [showAdminGate, setShowAdminGate] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [organization, setOrganization] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resumeReady, setResumeReady] = useState(false);
  const [historyQuizzes, setHistoryQuizzes] = useState([]);
  const [historyQuizNumber, setHistoryQuizNumber] = useState(1);
  const [historyEntries, setHistoryEntries] = useState([]);
  const [historyLoading, setHistoryLoading] = useState(false);
  const [historyError, setHistoryError] = useState("");
  const floatingProps = useMemo(() => buildFloatingIconProps(22), []);

  useEffect(() => {
    // Clear access on component mount to force passcode re-entry
    sessionStorage.removeItem("quizAccessGranted");
    setAccessGranted(false);
  }, []);

  useEffect(() => {
    const sessionId = localStorage.getItem("quizSessionId");
    if (!sessionId) {
      setResumeReady(false);
      return;
    }

    let mounted = true;
    getSession(sessionId)
      .then(() => {
        if (mounted) {
          setResumeReady(true);
        }
      })
      .catch(() => {
        localStorage.removeItem("quizSessionId");
        localStorage.removeItem("quizQuestions");
        if (mounted) {
          setResumeReady(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (location.state && location.state.error) {
      setError(location.state.error);
    }
  }, [location.state]);

  useEffect(() => {
    let mounted = true;

    const hydrateHistory = async () => {
      setHistoryLoading(true);
      setHistoryError("");

      try {
        const quizData = await getLeaderboardQuizzes();
        if (!mounted) return;

        const quizzes = quizData.quizzes || [];
        const fallbackQuizNumber = quizData.currentQuizNumber || 1;
        const selectedQuizNumber = quizzes.length
          ? quizzes[quizzes.length - 1].quizNumber
          : fallbackQuizNumber;

        setHistoryQuizzes(quizzes);
        setHistoryQuizNumber(selectedQuizNumber);

      } catch (err) {
        if (!mounted) return;
        setHistoryError("Could not load leaderboard history right now.");
      } finally {
        if (mounted) {
          setHistoryLoading(false);
        }
      }
    };

    hydrateHistory();

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;
    if (!historyQuizNumber) return;

    setHistoryLoading(true);
    setHistoryError("");

    getLeaderboard(8, historyQuizNumber)
      .then((data) => {
        if (!mounted) return;
        setHistoryEntries(data.entries || []);
      })
      .catch(() => {
        if (!mounted) return;
        setHistoryError("Could not load the selected leaderboard.");
      })
      .finally(() => {
        if (mounted) {
          setHistoryLoading(false);
        }
      });

    return () => {
      mounted = false;
    };
  }, [historyQuizNumber]);

  const handleAccess = () => {
    if (accessCode === "FiniMeansLife01234") {
      setAccessGranted(true);
      setAccessError("");
      sessionStorage.setItem("quizAccessGranted", "true");
      return;
    }

    setAccessError("Wrong passcode. You could not participate in the quiz.");
  };

  const handleRetryAccess = () => {
    setAccessCode("");
    setAccessError("");
  };

  const handleStart = async () => {
    setError("");
    if (!name.trim()) {
      setError("Please enter your name to start.");
      return;
    }

    setLoading(true);
    try {
      const payload = {
        name: name.trim(),
        email: email.trim(),
        organization: organization.trim(),
      };
      const data = await startQuiz(payload);
      localStorage.setItem("quizSessionId", data.sessionId);
      localStorage.setItem("quizQuestions", JSON.stringify(data.questions || []));
      localStorage.setItem("quizStartedAt", data.startedAt);
      localStorage.setItem("quizExpiresAt", data.expiresAt);
      localStorage.setItem("quizDurationMs", data.durationMs);
      localStorage.setItem("quizServerTime", data.serverTime);
      localStorage.setItem("quizPlayerName", data.player?.name || payload.name);
      localStorage.setItem("quizPlayerId", data.player?.id || "");
      navigate("/quiz/play");
    } catch (err) {
      setError(err.message || "Unable to start quiz.");
    } finally {
      setLoading(false);
    }
  };

  const handleResume = () => {
    navigate("/quiz/play");
  };

  const handleAdminAccess = () => {
    if (adminCode === "LongLiveAdmins01234") {
      sessionStorage.setItem("quizAdminGranted", "true");
      navigate("/quiz/admin");
      return;
    }
    setAdminError("Invalid admin code.");
  };

  const handleShowAdminGate = () => {
    setShowAdminGate(true);
  };

  const handleBackToMain = () => {
    setShowAdminGate(false);
    setAdminCode("");
    setAdminError("");
  };

  return (
    <div className="quiz-shell">
      <div className="quiz-floating-icons">
        {floatingProps.map((props, index) => {
          const Icon = floatingIcons[index % floatingIcons.length];
          const className = [
            "quiz-floating-icon",
            props.twinkle ? "quiz-twinkle" : "",
            index % 3 === 0 ? "quiz-glow" : "",
            index % 4 === 0 ? "quiz-drift" : "",
          ]
            .filter(Boolean)
            .join(" ");
          return (
            <span
              key={`icon-${index}`}
              className={className}
              style={{
                "--x": props.x,
                "--y": props.y,
                "--size": props.size,
                "--delay": props.delay,
              }}
            >
              <Icon />
            </span>
          );
        })}
      </div>

      <div className="quiz-container">
        {!accessGranted ? (
          <div className="quiz-card quiz-gate">
            <h1 className="quiz-title">Team Access</h1>
            <p className="quiz-subtitle">
              This quiz is restricted to Finivesta team members. Enter the access code to continue.
            </p>
            <input
              className="quiz-input"
              type="password"
              placeholder="Enter team passcode"
              value={accessCode}
              onChange={(event) => setAccessCode(event.target.value)}
            />
            {accessError && <div className="quiz-alert quiz-gate-message">{accessError}</div>}
            <div className="quiz-actions">
              <button className="quiz-button gold" onClick={handleAccess}>
                Enter Quiz
              </button>
              <button className="quiz-button ghost" onClick={handleRetryAccess}>
                Try Again
              </button>
            </div>
          </div>
        ) : showAdminGate ? (
          <div className="quiz-card quiz-gate">
            <h1 className="quiz-title">Admin Access</h1>
            <p className="quiz-subtitle">
              Enter the admin passcode to create and manage quiz questions.
            </p>
            <input
              className="quiz-input"
              type="password"
              placeholder="Enter admin passcode"
              value={adminCode}
              onChange={(event) => setAdminCode(event.target.value)}
            />
            {adminError && <div className="quiz-alert quiz-gate-message">{adminError}</div>}
            <div className="quiz-actions">
              <button className="quiz-button gold" onClick={handleAdminAccess}>
                Enter Admin Panel
              </button>
              <button className="quiz-button ghost" onClick={handleBackToMain}>
                Back to Quiz
              </button>
            </div>
          </div>
        ) : (
          <>
            <h1 className="quiz-title">Finivesta Vault Quiz</h1>
            <p className="quiz-subtitle">
              A secure, finance-first challenge with randomized questions, server-verified timing, and a
              live leaderboard. Choose your mode below.
            </p>

            <div className="quiz-card">
              <h2 style={{ color: "var(--quiz-gold-400)", marginBottom: "16px" }}>Play Quiz</h2>
              <div className="quiz-grid">
                <input
                  className="quiz-input"
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
                <input
                  className="quiz-input"
                  type="email"
                  placeholder="Email (optional)"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <input
                  className="quiz-input"
                  type="text"
                  placeholder="College or organization (optional)"
                  value={organization}
                  onChange={(event) => setOrganization(event.target.value)}
                />
              </div>

              {error && <div className="quiz-alert">{error}</div>}

              <div className="quiz-actions">
                <button className="quiz-button gold" onClick={handleStart} disabled={loading}>
                  {loading ? "Starting..." : "Start Quiz"}
                </button>
                {resumeReady && (
                  <button className="quiz-button ghost" onClick={handleResume}>
                    Resume Session
                  </button>
                )}
              </div>

              <div className="quiz-rules">
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
            </div>

            <div className="quiz-card" style={{ marginTop: "24px" }}>
              <h2 style={{ color: "var(--quiz-gold-400)", marginBottom: "12px" }}>Admin Panel</h2>
              <p style={{ color: "var(--quiz-muted)", marginBottom: "16px" }}>
                Manage quiz questions, set time limits, and configure the quiz.
              </p>
              <button className="quiz-button ghost" onClick={handleShowAdminGate}>
                Access Admin Panel
              </button>
            </div>

            <div className="quiz-card quiz-history-card" style={{ marginTop: "24px" }}>
              <h2 style={{ color: "var(--quiz-gold-400)", marginBottom: "12px" }}>Leaderboard History</h2>
              <p style={{ color: "var(--quiz-muted)", marginBottom: "16px" }}>
                View previous quiz rankings anytime, even before starting a new attempt.
              </p>

              <div className="quiz-history-toolbar">
                <label htmlFor="quiz-history-select" className="quiz-history-label">
                  Select Quiz
                </label>
                <select
                  id="quiz-history-select"
                  className="quiz-input"
                  value={historyQuizNumber}
                  onChange={(event) => setHistoryQuizNumber(Number(event.target.value))}
                  disabled={!historyQuizzes.length}
                >
                  {historyQuizzes.map((quiz) => (
                    <option key={quiz.quizNumber} value={quiz.quizNumber}>
                      {quiz.quizLabel}
                    </option>
                  ))}
                </select>
              </div>

              {historyLoading ? <div>Loading leaderboard history...</div> : null}
              {historyError ? <div className="quiz-alert">{historyError}</div> : null}

              {!historyLoading && !historyEntries.length ? (
                <div className="quiz-history-empty">No attempts recorded for this quiz yet.</div>
              ) : null}

              {!historyLoading && historyEntries.length ? (
                <div className="quiz-history-list">
                  {historyEntries.map((entry, index) => (
                    <div key={entry.sessionId} className="quiz-history-item">
                      <span>#{index + 1}</span>
                      <span>{entry.playerName}</span>
                      <span>
                        {entry.score}/{entry.totalQuestions}
                      </span>
                      <span>{formatDuration(entry.timeTakenMs)}</span>
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="quiz-actions">
                <button
                  className="quiz-button ghost"
                  onClick={() => navigate("/quiz/leaderboard", { state: { quizNumber: historyQuizNumber } })}
                >
                  Open Full Leaderboard
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizLanding;
