import React from "react";
import { Link } from "react-router-dom";
import "./Game.css";

import VideosImage from "./Images/Videos.jpg";

const Games = () => {
  return (
    <div className="games">
      <div className="header-games">
        <h1>Games</h1>
        <p>Access the wealth of knowledge and tools in our resource library.</p>
      </div>

      <div className="gamesbox">


        <Link to="/games/scramble" className="gamesboxsmall">
          <div className="img">
            <img src={VideosImage} alt="Scramble" />
          </div>
          <div className="text">
            <h2>Scramble</h2>
            <p>
              Unscramble the words before the time runs out
            </p>
          </div>
        </Link>


      </div>
    </div>
  );
};

export default Games;
