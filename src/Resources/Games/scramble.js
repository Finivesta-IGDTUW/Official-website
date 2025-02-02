import React from "react";
import "./footer.css";


const Game = () => {
  React.useEffect(() => {
    const words = [
      { word: "LOAN", hint: "Often used for things like buying a car, home, or funding education" },
      { word: "BANK", hint: "A place where people deposit their money" },
      { word: "CASH", hint: "Physical form of money" },
      { word: "STOCK", hint: "Represents a share in a company" },
      { word: "BUDGET", hint: "A plan for managing expenses" },
      { word: "INVEST", hint: "To put money into assets for future returns" },
      { word: "TAX", hint: "A mandatory contribution to the government" },
      { word: "SAVINGS", hint: "Money set aside for future use" },
      { word: "INTEREST", hint: "The cost of borrowing money" },
      { word: "INFLATION", hint: "The rise in general price levels" }
    ];

    let currentWord = {};
    let score = 0;
    let timeElapsed = 0;
    let timer;

    const shuffleWord = (word) => {
      return word.split('').sort(() => 0.5 - Math.random()).join(' ');
    };

    const startGame = () => {
      document.querySelector('.landing-page').style.display = 'none';
      document.querySelector('.game-container').style.display = 'block';

      currentWord = words[Math.floor(Math.random() * words.length)];
      document.getElementById("scrambled-word").textContent = shuffleWord(currentWord.word);
      document.querySelector(".hint").textContent = `Hint: ${currentWord.hint}`;

      document.getElementById("answer").value = "";
      timeElapsed = 0;
      document.getElementById("timer").textContent = `${timeElapsed}s`;


      clearInterval(timer);
      timer = setInterval(() => {
        timeElapsed++;
        document.getElementById("timer").textContent = `${timeElapsed}s`;
      }, 1000);
    };

    const showCorrectMessage = () => {
      const correctMessage = document.getElementById("correct-message");
      correctMessage.style.display = "flex";
      setTimeout(() => {
        correctMessage.style.display = "none";
      }, 2000);
    };

    const showWrongMessage = () => {
      const wrongMessage = document.getElementById("wrong-message");
      wrongMessage.style.display = "flex";
      setTimeout(() => {
        wrongMessage.style.display = "none";
      }, 2000);
    };

    document.getElementById("check").addEventListener("click", function () {
      const answer = document.getElementById("answer").value.toUpperCase();
      if (answer === currentWord.word) {
        score++;
        document.getElementById("score").textContent = score;
        showCorrectMessage();
        startGame();
      } else {
        document.getElementById("score").textContent = score;
        showWrongMessage();
        startGame();
      }
    });

    document.getElementById("refresh").addEventListener("click", function () {
      startGame();
    });

    document.getElementById("start-game-btn").addEventListener("click", function () {
      startGame();
    });

    document.querySelector('.landing-page').style.display = 'block';
    document.querySelector('.game-container').style.display = 'none';
  }, []);

  return (
    <div>
      <div className="landing-page">
        <div className="intro-container">
          <h1>Welcome to Finivesta's Scramble Game!</h1>
          <p>Can you unscramble the financial terms before time runs out? Let the game begin!</p>
          <button id="start-game-btn">Start Game</button>
        </div>
      </div>
      <div className="game-container">
        <div className="info">
          <div>Time: <span id="timer">0s</span></div>
          <div>Score: <span id="score">0</span></div>
        </div>
        <div className="guess">GUESS!</div>
        <div id="scrambled-word">N O L A</div>
        <div className="hint">Hint: Often used for things like buying a car, home, or funding education</div>
        <input type="text" id="answer" placeholder="Enter if you dare..." />
        <div className="buttons">
          <button id="refresh">REFRESH</button>
          <button id="check">CHECK</button>
        </div>
      </div>
      <div id="correct-message" className="correct-message">
        <span>Correct!</span> ✅
      </div>
      <div id="wrong-message" className="wrong-message">
        <span>Wrong!</span>❌ 
      </div>
    </div>
  );
};

export default Game;