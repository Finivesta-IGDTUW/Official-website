import React from "react";
import "../Resources.css"; // Ensure this path points to your CSS file

import HL from '../Images/Games/HigherLower/cover.png'; // Replace with your actual game cover image path

const Game = () => {
  return (
    <div className="gamepage">
      <div className="header games">
        <h1>Games</h1>
        <p>Play Engaging Games and Test Your Skills!</p>
      </div>

      <div className="resourcesbox">
        <div className="boxsmall game">
          <a href="/resources/games/HigherLower">
            <div className="img">
              <img src={HL} alt="Higher or Lower Game Cover" />
            </div>
            <div className="text">
              <h2>Higher or Lower</h2>
              <p className="game-byline-card">
                Can you guess if the next value is higher or lower?
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
