import React, { useState, useRef, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./WordleTitle.css";
import HowToPlayWordle from "./HowToPlayWordle";
import Wordle from "./Wordle"; // Import your Wordle game component
import { FaArrowLeft } from "react-icons/fa";
import SignInRegister from "./SignInRegister"; // Import your modal component
import { FaUserCircle } from "react-icons/fa"; // User icon
import Leaderboard from "./Leaderboard";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getApp } from "firebase/app";

const WordleTitle = ({ onHowToPlay }) => {
  const [soundOn, setSoundOn] = useState(true);
  const audioRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState(() => {
    // Try to load user from localStorage
    const saved = localStorage.getItem("wordle_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [leaderboardMessage, setLeaderboardMessage] = useState("");
  const [gameType, setGameType] = useState("daily");
  const [dailyPopup, setDailyPopup] = useState("");

  const navigate = useNavigate();

  // Play sound if enabled
  const playClick = () => {
    if (soundOn && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleLeaderboard = () => {
    playClick();
    setShowLeaderboard(true);
  };

  const handleShowLeaderboard = (msg) => {
    setShowGame(false);
    setLeaderboardMessage(msg);
    setShowLeaderboard(true);
  };

  const handleSoundToggle = () => {
    playClick();
    setSoundOn((s) => !s);
  };

  const handleHowToPlay = () => {
    playClick();
    setShowModal(true);
    onHowToPlay && onHowToPlay();
  };

  const closeModal = () => {
    playClick();
    setShowModal(false);
  };

  // Permanent close game button handler
  const handleCloseGame = () => {
    playClick();
    navigate(-1); // Go back to previous route
  };

  // Back to title page from game
  const handleBackToTitle = () => {
    playClick();
    setShowGame(false);
    setFadeOut(false);
    setShowLeaderboard(false);
  };

  const handleStartDaily = async () => {
    setGameType("daily");
    if (user && user.uid) {
      const alreadyPlayed = await hasPlayedDailyChallenge();
      if (alreadyPlayed) {
        setDailyPopup("Daily challenge already played. Come back tomorrow.");
        return;
      }
    }
    setShowGame(true);
  };

  const handleStartNormal = () => {
    setGameType("normal");
    setShowGame(true);
  };

  const hasPlayedDailyChallenge = async () => {
    if (!user || !user.uid) return false;
    const db = getFirestore(getApp());
    const userDocRef = doc(db, "games", "wordle", "users", user.uid);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
      const results = docSnap.data().results || [];
      // Use IST date for comparison
      const now = new Date();
      const istOffset = 330 * 60 * 1000;
      const istTime = new Date(
        now.getTime() + istOffset - now.getTimezoneOffset() * 60000
      );
      const todayIST = istTime.toISOString().slice(0, 10);
      return results.some((r) => r.dateOfAttempt === todayIST);
    }
    return false;
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("wordle_user", JSON.stringify(user));
    } else {
      localStorage.removeItem("wordle_user");
    }
  }, [user]);

  return (
    <div className="wordle-titlepage-container">
      <audio
        ref={audioRef}
        src="/assets/audio/DoubleMouseClick.wav"
        preload="auto"
      />
      {/* Back Icon (only when game is open) */}
      {(showGame || showLeaderboard) && (
        <button
          className="wordle-back-btn"
          onClick={handleBackToTitle}
          aria-label="Back"
        >
          <FaArrowLeft size={28} color="#5f8e33" />
        </button>
      )}
      {/* Permanent Close Game Button */}
      <button
        className={`wordle-close-game-btn${
          showModal || showLoginModal || showLeaderboard ? " fade-out" : ""
        }`}
        disabled={showGame || showLeaderboard}
        style={
          showGame || showLeaderboard
            ? { opacity: 0, pointerEvents: "none" }
            : {}
        }
        onClick={handleCloseGame}
        aria-label="Close Game"
      >
        <FaTimes size={28} />
      </button>
      <button
        className={`wordle-user-btn${showModal ? " fade-out" : ""}`}
        onClick={() => setShowLoginModal(true)}
        aria-label="User"
      >
        {user && (user.displayName || user.email) ? (
          <span className="wordle-user-initials">
            {(user.displayName ? user.displayName : user.email)
              .split(" ")
              .map((word) => word[0])
              .join("")
              .substring(0, 2)
              .toUpperCase()}
          </span>
        ) : (
          <FaUserCircle size={32} color="#5f8e33" />
        )}
      </button>
      {showLoginModal && (
        <SignInRegister
          show={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          user={user}
          setUser={setUser}
          playClick={playClick}
        />
      )}

      <div className={`wordle-titlepage-content${showGame ? " game-in" : ""}`}>
        <h1
          className={`wordle-titlepage-heading${showGame ? " heading-up" : ""}`}
        >
          {showLeaderboard ? "Wordle Street Leaderboard" : "Wordle Street"}
        </h1>
        {!showGame && !showLeaderboard && (
          <div className={`wordle-titlepage-btns${fadeOut ? " fade-out" : ""}`}>
            <button className="wordle-titlepage-btn" onClick={handleStartDaily}>
              Play Daily Challenge
            </button>
            <button
              className="wordle-titlepage-btn"
              onClick={handleStartNormal}
            >
              Play Normal Game
            </button>
            <button
              className="wordle-leaderboard-btn"
              onClick={handleLeaderboard}
            >
              Checkout Leaderboard
            </button>
          </div>
        )}
        {dailyPopup && (
          <div
            className="wordle-popup-overlay"
            onClick={() => setDailyPopup("")}
          >
            <div className="wordle-popup" onClick={(e) => e.stopPropagation()}>
              <div>{dailyPopup}</div>
              <button
                className="wordle-titlepage-btn"
                style={{ marginTop: 16 }}
                onClick={() => setDailyPopup("")}
              >
                OK
              </button>
            </div>
          </div>
        )}
        {showGame && (
          <div className="wordle-fade-in">
            <Wordle
              gameType={gameType}
              showLeaderboard={handleShowLeaderboard}
              user={user}
            />
          </div>
        )}
        {showLeaderboard && (
          <Leaderboard message={leaderboardMessage} user={user} />
        )}
      </div>
      <button className="wordle-titlepage-howto" onClick={handleHowToPlay}>
        How to Play
      </button>
      {showModal && (
        <HowToPlayWordle onClose={closeModal} playClick={playClick} />
      )}
      <button
        className="wordle-titlepage-sound"
        onClick={handleSoundToggle}
        aria-label={soundOn ? "Sound On" : "Sound Off"}
      >
        {soundOn ? <FaVolumeUp size={24} /> : <FaVolumeMute size={24} />}
      </button>
    </div>
  );
};

export default WordleTitle;
