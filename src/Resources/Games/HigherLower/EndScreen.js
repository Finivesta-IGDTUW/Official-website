// EndScreen.js
import React from "react";
import "./HigherLower.css"
function EndScreen({ score, highScore, restart, returnToMenu }) {
  return (
    <div className="end-container">
       <div className="end-container1">
      <h2>Game Over!</h2>
      <br/>
      <br/>
      <br/>
     
      <p>Final Score: {score}</p>
      <p>High Score: {highScore}</p>
      </div>
      <br/>
      <br/>
      <div className="end-buttons">
       
        <button onClick={restart}>Try Again</button>
        <button onClick={returnToMenu}>Main Menu</button>
      </div>
    </div>
  );
}

export default EndScreen;
