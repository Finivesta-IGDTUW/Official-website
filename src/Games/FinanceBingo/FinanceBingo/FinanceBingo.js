import React, { useState, useEffect } from "react";
import "./FinanceBingo.css";
import BingoTable from "./components/BingoTable";
import QuestionDisplay from "./components/QuestionDisplay";
import BingoLetters from "./components/BingoLetters";
import ActionButtons from "./components/ActionButtons";

const FinanceBingo = () => {
  const [questions] = useState([
    { question: "Did you save 10 rupees today?", type: "yesno" },
    { question: "Do you know the meaning of TDS?", type: "yesno" },
    { question: "Have you set a monthly budget?", type: "yesno" },
    { question: "Did you track your expenses this week?", type: "yesno" },
    { question: "Do you know what compound interest is?", type: "yesno" },
    { question: "Have you reviewed your bank statements recently?", type: "yesno" },
    { question: "Do you know your credit score?", type: "yesno" },
    { question: "Have you set a financial goal for this month?", type: "yesno" },
    { question: "Did you avoid unnecessary expenses today?", type: "yesno" },
    { question: "Do you understand the concept of inflation?", type: "yesno" },
    { question: "Have you saved at least 20% of your income this month?", type: "yesno" },
    { question: "Do you know what a fixed deposit is?", type: "yesno" },
    { question: "Have you invested in mutual funds?", type: "yesno" },
    { question: "Did you avoid impulse buying this week?", type: "yesno" },
    { question: "Do you know how to calculate simple interest?", type: "yesno" },
    { question: "Have you reviewed your investment portfolio recently?", type: "yesno" },
    { question: "Do you understand the benefits of a savings account?", type: "yesno" },
    { question: "Have you started an emergency fund?", type: "yesno" },
    { question: "Do you know what a recurring deposit is?", type: "yesno" },
    { question: "Did you make any donations or charitable contributions this month?", type: "yesno" },
    { question: "Do you understand the risks of loans?", type: "yesno" },
    { question: "Have you set up automatic savings transfers?", type: "yesno" },
    { question: "Do you know what an SIP (Systematic Investment Plan) is?", type: "yesno" },
    { question: "Are you aware of your monthly cash flow?", type: "yesno" },
    { question: "Do you know the benefits of a retirement plan?", type: "yesno" },
  ]);

  const [questionIndex, setQuestionIndex] = useState(0);
  const [randomizedQuestionOrder] = useState(
    Array.from({ length: questions.length }, (_, i) => i)
      .filter((q) => q !== 0)
      .sort(() => Math.random() - 0.5)
  );
  const [completedCombinations, setCompletedCombinations] = useState(new Set());
  const [winningIterator, setWinningIterator] = useState(0);
  const [struckCells, setStruckCells] = useState([]);

  useEffect(() => {
    console.log("Current question:", questions[questionIndex]);
    console.log("Question index:", questionIndex);
  }, [questionIndex, questions]);

  const handleAnswer = (isCorrect, randomQuestionNumber) => {
    if (isCorrect) {
      const updatedStruckCells = [...struckCells, randomQuestionNumber - 1];
      setStruckCells(updatedStruckCells);

      const newWins = checkWinWith(updatedStruckCells);
      if (newWins > 0) {
        const updatedIterator = winningIterator + newWins;
        setWinningIterator(updatedIterator);

        if (updatedIterator >= 5) {
          alert("B I N G O");
          window.location.reload();
          return;
        }
      }
    }

    if (questionIndex < questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      alert("You've completed all questions! Refresh to play again.");
    }
  };

  const checkWinWith = (cells) => {
    const winningPositions = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
    ];

    let newWins = 0;

    for (const combination of winningPositions) {
      const key = combination.toString();
      if (completedCombinations.has(key)) continue;

      if (combination.every((index) => cells.includes(index))) {
        setCompletedCombinations((prev) => new Set([...prev, key]));
        newWins++;
      }
    }

    return newWins;
  };

  return (
    <div className="finance-bingo">
      <div id="timer" className="timer">Time: 0s</div>
      <header className="header">
        <h1>FINANCE BINGO</h1>
      </header>

      <div className="main-content">
        {/* Left: Bingo Table */}
        <div className="left-section">
          <BingoTable struckCells={struckCells} />
        </div>

        {/* Right: Questions, Buttons, Bingo Letters */}
        <div className="right-section">
          <QuestionDisplay
            question={questions[questionIndex]}
            questionNumber={randomizedQuestionOrder[questionIndex]}
            handleAnswer={handleAnswer}
          />
          <div className="bingo-letters">
            <BingoLetters winningIterator={winningIterator} />
          </div>
          <ActionButtons />
        </div>
      </div>
    </div>
  );
};

export default FinanceBingo;
