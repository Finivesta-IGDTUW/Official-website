import React from "react";

const QuestionDisplay = ({ question, questionNumber, handleAnswer }) => {
  return (
    <div id="question-container">
      <p id="question-number">{questionNumber}</p>
      <p id="question-text">{question.question}</p>
      <div id="answer-buttons">
        <button className="answer-button" onClick={() => handleAnswer(true, questionNumber)}>
          Yes
        </button>
        <button className="answer-button" onClick={() => handleAnswer(false, questionNumber)}>
          No
        </button>
      </div>
    </div>
  );
};

export default QuestionDisplay;