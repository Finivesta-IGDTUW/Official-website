import React from "react";
import "./WordleTitle.css";

const HowToPlayModal = ({ onClose, playClick }) => (
  <div className="wordle-modal-overlay" onClick={onClose}>
    <div
      className="wordle-modal"
      style={{ width: "80vw", height: "80vh" }}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="wordle-modal-header">
        <h2 className="wordle-modal-title">How to Play Wordle Street</h2>
        <button
          className="wordle-modal-x"
          onClick={() => {
            playClick && playClick();
            onClose && onClose();
          }}
          aria-label="Close"
        >
          &#10005;
        </button>
      </div>
      <ul className="wordle-modal-rules wordle-modal-rules-scroll">
        <li>
          Guess the <b>Wordle</b> of the game in limited tries.
        </li>
        {/* <li>
          Each guess must be a valid <b>n</b>-letter word.
        </li> */}
        <li>
          After each guess, the color of the tiles will change to show how close
          your guess was to the word.
        </li>
        <li>
          <span style={{ color: "#5f8e33", fontWeight: 600 }}>Green</span> means
          the letter is in the correct spot.
        </li>
        <li>
          <span style={{ color: "#eab308", fontWeight: 600 }}>Yellow</span>{" "}
          means the letter is in the word but in the wrong spot.
        </li>
        <li>
          <span style={{ color: "#888", fontWeight: 600 }}>Gray</span> means the
          letter is not in the word.
        </li>
        <li>The on-screen keyboard will also show your progress.</li>
        <li>Try to guess the word in as few tries as possible!</li>
      </ul>
    </div>
  </div>
);

export default HowToPlayModal;
