import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

const QuizResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("quizResult");
    if (stored) {
      setResult(JSON.parse(stored));
    }
  }, []);

  if (!result) {
    return (
      <div className="quiz-shell">
        <QuizBackground count={18} />
        <div className="quiz-container">
          <div className="quiz-card">Your result will appear here once the quiz is complete.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-shell">
      <QuizBackground count={18} />
      <div className="quiz-container">
        <h1 className="quiz-title">Congratulations</h1>
        <p className="quiz-subtitle">Your score is locked. View the leaderboard when you are ready.</p>

        <div className="quiz-card quiz-result-card">
          <div className="quiz-result-grid">
            <div className="quiz-result-tile">
              <div className="quiz-muted">Score</div>
              <h2>
                {result.score} / {result.totalQuestions}
              </h2>
            </div>
            <div className="quiz-result-tile">
              <div className="quiz-muted">Time Taken</div>
              <h2>{formatDuration(result.timeTakenMs)}</h2>
            </div>
            <div className="quiz-result-tile">
              <div className="quiz-muted">Accuracy</div>
              <h2>{result.totalQuestions ? Math.round((result.score / result.totalQuestions) * 100) : 0}%</h2>
            </div>
          </div>

          <button className="quiz-button gold" onClick={() => navigate("/quiz/leaderboard")}>
            View Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
