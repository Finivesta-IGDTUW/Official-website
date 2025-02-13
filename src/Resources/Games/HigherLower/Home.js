import React, { useState, useEffect } from "react";
import commodityData from "./data";
import "./HigherLower.css";
import StartScreen from "./StartScreen";
import GameScreen from "./GameScreen";
import EndScreen from "./EndScreen";
import LoadingScreen from "./LoadingScreen";

function Home() {
  const [screen, setScreen] = useState("start");
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [metricToggle, setMetricToggle] = useState(true);
  const [commodities, setCommodities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMusicOn, setIsMusicOn] = useState(true);
  const [gameMode, setGameMode] = useState("Classic");

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let trailX = 0;
    let trailY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      // Update custom cursor
      cursorX = mouseX - 20;
      cursorY = mouseY - 20;
      document.documentElement.style.setProperty('--cursor-x', `${cursorX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${cursorY}px`);
      
      // Update trail with delay
      setTimeout(() => {
        trailX = mouseX - 4;
        trailY = mouseY - 4;
        document.documentElement.style.setProperty('--trail-x', `${trailX}px`);
        document.documentElement.style.setProperty('--trail-y', `${trailY}px`);
      }, 50);
    };

    document.addEventListener('mousemove', handleMouseMove);

    // Simulate a loading delay
    const timer = setTimeout(() => {
      setCommodities(commodityData);
      setLoading(false);
    }, 2000);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  const handleStart = (mode) => {
    setGameMode(mode);
    setScore(0);
    setScreen("game");
  };

  return (
    <div className="app">
      <div 
        className="custom-cursor" 
        style={{
          left: 'var(--cursor-x, 0)',
          top: 'var(--cursor-y, 0)'
        }}
      />
      <div 
        className="cursor-trail" 
        style={{
          left: 'var(--trail-x, 0)',
          top: 'var(--trail-y, 0)'
        }}
      />

      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          {screen === "start" && (
            <StartScreen
              handleStart={handleStart}
              metricToggle={metricToggle}
              setMetricToggle={setMetricToggle}
              isMusicOn={isMusicOn}
              toggleMusic={() => setIsMusicOn((prev) => !prev)}
            />
          )}
          {screen === "game" && (
            <GameScreen
              cData={commodities}
              score={score}
              setScore={setScore}
              highScore={highScore}
              setHighScore={setHighScore}
              handleLoss={() => setScreen("end")}
              gameMode={gameMode}
              isMusicOn={isMusicOn}
              metricToggle={metricToggle}
            />
          )}
          {screen === "end" && (
            <EndScreen
              score={score}
              highScore={Math.max(score, highScore)}
              restart={() => {
                setScore(0);
                setScreen("game");
              }}
              returnToMenu={() => setScreen("start")}
            />
          )}
        </>
      )}
    </div>
  );
}

export default Home;
