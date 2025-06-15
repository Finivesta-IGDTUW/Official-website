// GameScreen.js
import React, { useState, useEffect, useRef } from "react";
import { Howl } from "howler";
import { fetchCommodity } from "./CommodityObj";
import backgroundMusic from "./sounds/background.mp3";
import quit from "./sounds/quit.mp3";
// Import sound files explicitly
import correctSound from "./sounds/correct.mp3";
import wrongSound from "./sounds/wrong.mp3";
import clickSound from "./sounds/click.mp3";

// Import AOS and its styles
import AOS from "aos";
import "aos/dist/aos.css";

const sounds = {
  correct: new Howl({ src: [correctSound] }),
  wrong: new Howl({ src: [wrongSound] }),
  flip: new Howl({ src: [clickSound] }),
  quit: new Howl({ src: [quit] })
};

// Helper to return different placeholder images for left/right cards.
const getPlaceholderImage = (side) => {
  if (side === "left") return "/images/placeholder1.png";
  if (side === "right") return "/images/placeholder2.png";
  return "/images/placeholder.png";
};

// Helper to get unique commodity
const getUniqueCommodity = (cData, excludeCommodity = null) => {
  let newCommodity;
  do {
    newCommodity = fetchCommodity(cData);
  } while (excludeCommodity && newCommodity.name === excludeCommodity.name);
  return newCommodity;
};

function GameScreen({
  cData,
  score,
  setScore,
  highScore,
  setHighScore,
  handleLoss,
  gameMode,
  isMusicOn,
  metricToggle
}) {
  // Timer: For Beat The Clock mode, timer starts at 15 seconds.
  const initialTimer = gameMode === "Beat The Clock" ? 15 : null;
  const [timerValue, setTimerValue] = useState(initialTimer);

  // Dual mode states.
  const [leftCommodity, setLeftCommodity] = useState(null);
  const [rightCommodity, setRightCommodity] = useState(null);
  // Single mode state.
  const [currentCommodity, setCurrentCommodity] = useState(null);

  // Common state: track if answer submitted and the result.
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [result, setResult] = useState(null);
  const wrapperRef = useRef(null);
  const musicRef = useRef(null);

  // Refs for swipe detection (if using pointer input)
  const startXRef = useRef(null);
  const startYRef = useRef(null);

  // Initialize AOS on component mount (entry animations only)
  useEffect(() => {
    AOS.init({
      once: true,      // Animate only once when the element enters the viewport
      duration: 1000   // Default duration for entry animations
    });
  }, []);

  // Initialize commodities when data or mode changes.
  useEffect(() => {
    if (metricToggle) {
      // Dual Comparison mode – ensure different commodities
      const left = fetchCommodity(cData);
      const right = getUniqueCommodity(cData, left);
      setLeftCommodity(left);
      setRightCommodity(right);
      setAnswerSubmitted(false);
      setResult(null);
    } else {
      // Single Price Prediction mode.
      setCurrentCommodity(fetchCommodity(cData));
      setAnswerSubmitted(false);
      setResult(null);
      setTimerValue(initialTimer);
    }
  }, [cData, metricToggle, initialTimer]);

  // Background music effect with unload when off.
  useEffect(() => {
    if (isMusicOn) {
      musicRef.current = new Howl({
        src: [backgroundMusic],
        loop: true,
        volume: 0.5,
        html5: true,
        onload: () => console.log("Background music loaded"),
        onloaderror: (id, error) =>
          console.error("Error loading background music:", error)
      });
      musicRef.current.play();
    } else {
      if (musicRef.current) {
        musicRef.current.unload();
        musicRef.current = null;
      }
    }
    return () => {
      if (musicRef.current) {
        musicRef.current.unload();
        musicRef.current = null;
      }
    };
  }, [isMusicOn]);

  // Timer logic for Beat The Clock (applies for both dual and single modes).
  useEffect(() => {
    if (gameMode === "Beat The Clock" && timerValue > 0) {
      const interval = setInterval(() => {
        setTimerValue((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else if (gameMode === "Beat The Clock" && timerValue === 0) {
      handleLoss();
    }
  }, [timerValue, gameMode, handleLoss]);

  // New helper function to animate all commodity cards.
  // 'animationClass' should be "swipe-right-card" or "swipe-left-card"
  const animateCards = (animationClass, callback) => {
    const cards = wrapperRef.current.querySelectorAll(".commodity-card");
    if (cards.length === 0) {
      callback();
      return;
    }
    let animatedCount = 0;
    cards.forEach((card) => {
      card.classList.add(animationClass);
      const handleEnd = () => {
        card.classList.remove(animationClass);
        card.removeEventListener("animationend", handleEnd);
        animatedCount++;
        if (animatedCount === cards.length) {
          callback();
        }
      };
      card.addEventListener("animationend", handleEnd);
    });
  };

  // Handler for Dual Comparison answer.
  // Handler for Dual Comparison answer.
const handleDualAnswer = (choice) => {
  if (answerSubmitted) return;
  setAnswerSubmitted(true);
  sounds.flip.play();

  const leftPrice = leftCommodity.price;
  const rightPrice = rightCommodity.price;
  const isCorrect =
    choice === "higher" ? rightPrice > leftPrice : rightPrice < leftPrice;

  if (!isCorrect) {
    // For a wrong answer: Reveal the right commodity price immediately.
    setResult("wrong");
    sounds.wrong.play();
    // Delay animation so the result is visible on the right.
    setTimeout(() => {
      animateCards("swipe-left-card", () => {
        // After animation complete, trigger loss.
        handleLoss();
      });
    }, 500);
  } else {
    // For a correct answer: Animate immediately.
    animateCards("swipe-right-card", () => {
      setResult("correct");
      sounds.correct.play();

      setTimeout(() => {
        setScore((prev) => {
          const newScore = prev + 1;
          if (newScore > highScore) setHighScore(newScore);
          return newScore;
        });
        if (gameMode === "Beat The Clock") {
          setTimerValue(15);
        }
        // In dual mode, the right card becomes the new left.
        setLeftCommodity(rightCommodity);
        setRightCommodity(getUniqueCommodity(cData, rightCommodity));
        setAnswerSubmitted(false);
        setResult(null);
      }, 500);
    });
  }
};

// Handler for Single Price Prediction answer.
const handleSingleAnswer = (choice) => {
  if (answerSubmitted) return;
  setAnswerSubmitted(true);
  sounds.flip.play();

  const currentPrice = currentCommodity.price;
  const nextCommodity = fetchCommodity(cData);
  const nextPrice = nextCommodity.price;
  const isCorrect =
    choice === "higher" ? nextPrice > currentPrice : nextPrice < currentPrice;

  if (!isCorrect) {
    // For a wrong answer: Reveal the result immediately.
    setResult("wrong");
    sounds.wrong.play();
    setTimeout(() => {
      animateCards("swipe-left-card", () => {
        handleLoss();
      });
    }, 500);
  } else {
    animateCards("swipe-right-card", () => {
      setResult("correct");
      sounds.correct.play();
      setTimeout(() => {
        setScore((prev) => {
          const newScore = prev + 1;
          if (newScore > highScore) setHighScore(newScore);
          return newScore;
        });
        setCurrentCommodity(nextCommodity);
        setAnswerSubmitted(false);
        setResult(null);
        if (gameMode === "Beat The Clock") {
          setTimerValue(15);
        }
      }, 500);
    });
  }
};

  // --- Swipe Detection (for pointer/mouse input) ---
  const handlePointerDown = (e) => {
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
  };

  const handlePointerUp = (e) => {
    if (startXRef.current === null) return;
    const diffX = e.clientX - startXRef.current;
    // Set threshold for swipe detection (50px)
    if (Math.abs(diffX) > 50 && !answerSubmitted) {
      // Determine answer from swipe direction:
      // Right swipe → answer "higher"
      // Left swipe → answer "lower"
      const swipeChoice = diffX > 0 ? "higher" : "lower";
      if (metricToggle) {
        handleDualAnswer(swipeChoice);
      } else {
        handleSingleAnswer(swipeChoice);
      }
    }
    startXRef.current = null;
    startYRef.current = null;
  };

  // --- Quit Handler ---
  const handleQuit = () => {
    // Replace this with your desired quit logic.
    // For demonstration, we redirect to the home page.
    sounds.quit.play();
    handleLoss();
  };

  // --- Render UI based on mode ---
  if (metricToggle) {
    // Dual Comparison UI.
    return (
      <div
        className="wrapper"
        ref={wrapperRef}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
      >
        {gameMode === "Beat The Clock" && timerValue !== null && (
          <div className="timer">⏳ {timerValue}s</div>
        )}
        <div className="dual-container">
          {/* Left Commodity Card with AOS entry animation */}
          <div
            key={leftCommodity ? leftCommodity.name : "left-commodity"}
            className="commodity-card dual-card"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            {leftCommodity && (
              <>
                <img
                  src={leftCommodity.image || getPlaceholderImage("left")}
                  alt={leftCommodity.name}
                  className="commodity-image"
                />
                <h2>{leftCommodity.name}</h2>
                <div className="price">
                  ${leftCommodity.price.toFixed(2)}
                </div>
              </>
            )}
          </div>
          {/* Right Commodity Card with AOS entry animation and delay */}
          <div
            key={rightCommodity ? rightCommodity.name : "right-commodity"}
            className="commodity-card dual-card"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {rightCommodity && (
              <>
                <img
                  src={rightCommodity.image || getPlaceholderImage("right")}
                  alt={rightCommodity.name}
                  className="commodity-image"
                />
                <h2>{rightCommodity.name}</h2>
                {answerSubmitted ? (
                  <div className="price">
                    ${rightCommodity.price.toFixed(2)}
                  </div>
                ) : (
                  <div className="price hidden-price">???</div>
                )}
              </>
            )}
          </div>
        </div>
        {!answerSubmitted && (
          <div className="dual-buttons">
            <button onClick={() => handleDualAnswer("higher")}>
              Higher
            </button>
            <button onClick={() => handleDualAnswer("lower")}>
              Lower
            </button>
          </div>
        )}
        {result && (
          <div className={`result-overlay ${result}`}>
            {result === "correct" ? "✔" : "✖"}
          </div>
        )}
        <div className="score-board">
          <div className="high-score">High Score: {highScore}</div>
          <div className="current-score">Score: {score}</div>
        </div>
        {/* Quit Button */}
        <button className="quit-button" onClick={handleQuit}>
          Quit
        </button>
      </div>
    );
  } else {
    // Single Price Prediction UI.
    return (
      <div
        className="wrapper"
        ref={wrapperRef}
        onMouseDown={handlePointerDown}
        onMouseUp={handlePointerUp}
      >
        {gameMode === "Beat The Clock" && timerValue !== null && (
          <div className="timer">⏳ {timerValue}s</div>
        )}
        <div className="single-container">
          {/* Single Commodity Card with AOS entry animation */}
          <div
            key={currentCommodity ? currentCommodity.name : "current-commodity"}
            className="commodity-card single-card"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {currentCommodity && (
              <>
                <img
                  src={
                    currentCommodity.image ||
                    "/images/placeholder.png"
                  }
                  alt={currentCommodity.name}
                  className="commodity-image"
                />
                <h2>{currentCommodity.name}</h2>
                <div className="price">
                  ${currentCommodity.price.toFixed(2)}
                </div>
              </>
            )}
          </div>
        </div>
       
        {!answerSubmitted && (
          <div className="single-buttons">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => handleSingleAnswer("lower")}>
              Lower
            </button>
            <button onClick={() => handleSingleAnswer("higher")}>
              Higher
            </button>
          </div>
        )}
        {result && (
          <div className={`result-overlay ${result}`}>
            {result === "correct" ? "✔" : "✖"}
          </div>
        )}
        <div className="score-board">
          <div className="high-score">High Score: {highScore}</div>
          <div className="current-score">Score: {score}</div>
        </div>
        {/* Quit Button */}
        <button className="quit-button" onClick={handleQuit}>
          Quit
        </button>
      </div>
    );
  }
}

export default GameScreen;
