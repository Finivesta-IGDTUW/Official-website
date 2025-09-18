import React, { useState, useEffect, useRef } from "react";
import {
  getFirestore,
  doc,
  setDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getApp } from "firebase/app";
import "./Wordle.css";
import winSound from "../sounds/win.mp3";
import loseSound from "../sounds/lose.mp3";


// Get today's date in IST (YYYY-MM-DD)
function getTodayIST() {
  const now = new Date();
  const istOffset = 330 * 60 * 1000;
  const istTime = new Date(
    now.getTime() + istOffset - now.getTimezoneOffset() * 60000
  );
  return istTime.toISOString().slice(0, 10);
}

const QWERTY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
];

const getEmptyGrid = () => Array.from({ length: 6 }, () => Array(5).fill(""));
const getEmptyStatusGrid = () =>
  Array.from({ length: 6 }, () => Array(5).fill(""));

const Wordle = ({
  showLeaderboard,
  user,
  gameType,
  playKeypadClick,
  soundOn = true,
  pauseTimer = false,
  onCloseGame,
}) => {
  const [grid, setGrid] = useState(getEmptyGrid());
  const [statusGrid, setStatusGrid] = useState(getEmptyStatusGrid());
  const [currentRow, setCurrentRow] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const [keyboardStatus, setKeyboardStatus] = useState({});
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  const [timer, setTimer] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  const [wordOfTheDay, setWordOfTheDay] = useState("MONEY");
  const [rowAnimation, setRowAnimation] = useState({}); 
  const [coins, setCoins] = useState([]);

  const spawnCoins = (count = 7) => {
  const arr = Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    delay: i * 120, // ms between coins
    stack: i,       // how high this coin stacks
  }));
  setCoins(arr);

  // auto-clear after the animation finishes
  setTimeout(() => setCoins([]), 2200);
};

const spawnConfetti = (count = 30) => {
  const confettiArr = Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    x: Math.random() * 300 - 150, // random horizontal offset
    delay: Math.random() * 800,
  }));
  confettiArr.forEach(({ id, x, delay }) => {
    const conf = document.createElement("div");
    conf.className = "confetti";
    conf.style.setProperty("--x", `${x}px`);
    conf.style.animationDelay = `${delay}ms`;
    conf.id = id;
    document.body.appendChild(conf);
    setTimeout(() => document.body.removeChild(conf), 2500);
  });
};

const spawnSparkles = (count = 20) => {
  const sparkleArr = Array.from({ length: count }, (_, i) => ({
    id: `${Date.now()}-${i}`,
    x: Math.random() * 400 - 200,
    y: Math.random() * 100,
    delay: Math.random() * 1000,
  }));
  sparkleArr.forEach(({ id, x, y, delay }) => {
    const sp = document.createElement("div");
    sp.className = "sparkle";
    sp.style.left = `calc(50% + ${x}px)`;
    sp.style.top = `${y}px`;
    sp.style.animationDelay = `${delay}ms`;
    sp.id = id;
    document.body.appendChild(sp);
    setTimeout(() => document.body.removeChild(sp), 2000);
  });
};


  // Fetch today's word from Firestore if daily game
  useEffect(() => {
    async function fetchWord() {
      const db = getFirestore(getApp());
      if (gameType === "daily") {
        const colRef = collection(db, "games", "wordle", "word_of_the_day");
        const today = getTodayIST(); // assuming this returns a Date object

// Create a new Date object for 45 days ago
const pastDate = new Date(today);
pastDate.setDate(pastDate.getDate() - 30);

console.log(pastDate); // Date object 45 days before today

        const q = query(colRef, where("date", "==", pastDate));
        const snap = await getDocs(q);
        if (!snap.empty) {
          const docData = snap.docs[0].data();
          setWordOfTheDay(docData.word.toUpperCase());
        }
      } else {
        // Fetch all words from word_of_the_day collection
        const colRef = collection(db, "games", "wordle", "word_of_the_day");
        const snap = await getDocs(colRef);
        const words = snap.docs.map((doc) => doc.data().word.toUpperCase());
        if (words.length > 0) {
          const randomWord = words[Math.floor(Math.random() * words.length)];
          setWordOfTheDay(randomWord);
        }
      }
    }
    fetchWord();
  }, [gameType]);

  // Focus on the invisible input for keyboard events
  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, [currentRow, currentCol]);

  // Timer effect
const startRef = useRef(null);

useEffect(() => {
  let interval;
  if (timerActive && !pauseTimer) {
    if (!startRef.current) {
      // set start time relative to existing timer (for resume after pause)
      startRef.current = Date.now() - timer;
    }
    interval = setInterval(() => {
      // calculate elapsed time from actual clock
      setTimer(Date.now() - startRef.current);
    }, 100); // update every 50ms, smooth but not overkill
  }
  return () => clearInterval(interval);
}, [timerActive, pauseTimer]);


  // Stop timer on win or lose
  useEffect(() => {
    if (
      message === "Congratulations! You guessed it!" ||
      message.startsWith("Game Over!")
    ) {
      setTimerActive(false);
    }
  }, [message]);

  // Format timer as MM:SS:MS
  const getTimerParts = (t) => {
    const m = String(Math.floor(t / 60000)).padStart(2, "0");
    const s = String(Math.floor((t % 60000) / 1000)).padStart(2, "0");
    const ms = String(Math.floor((t % 1000) / 10)).padStart(2, "0");
    return { m, s, ms };
  };

  // Handle keyboard input
  const handleKeyDown = (e) => {
    if (message) return; // Game over

    let key = e.key.toUpperCase();
    if (key === "BACKSPACE") {
      handleBackspace();
    } else if (key === "ENTER") {
      handleEnter();
    } else if (/^[A-Z]$/.test(key) && currentCol < 5) {
      if (typeof playKeypadClick === "function" && soundOn) {
        playKeypadClick();
      }
      handleLetter(key);
    }
  };

  const handleLetter = (letter) => {
    if (currentCol < 5 && currentRow < 6) {
      const newGrid = grid.map((row, i) =>
        i === currentRow
          ? row.map((cell, j) => (j === currentCol ? letter : cell))
          : row
      );
      setGrid(newGrid);
      setCurrentCol(currentCol + 1);
    }
  };

  const handleBackspace = () => {
    if (currentCol > 0) {
      const newGrid = grid.map((row, i) =>
        i === currentRow
          ? row.map((cell, j) => (j === currentCol - 1 ? "" : cell))
          : row
      );
      setGrid(newGrid);
      setCurrentCol(currentCol - 1);
    }
  };

  const handleEnter = () => {
    if (currentCol !== 5) {
      setMessage("Not enough letters");
      setTimeout(() => setMessage(""), 1200);
      return;
    }
    const guess = grid[currentRow].join("");
    if (!/^[A-Z]{5}$/.test(guess)) {
      setMessage("Invalid word");
      setTimeout(() => setMessage(""), 1200);
      return;
    }

    // Show loader while checking word
    setMessage("Checking if the word exists...");

    // Check if word exists using dictionaryapi.dev
    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${guess.toLowerCase()}`
    )
      .then((res) => {
        if (!res.ok) return null;
        return res.json();
      })
      .catch(() => null)
      .then((data) => {
        // Remove loader message before showing result
        setMessage("");
        if (!data) {
          setMessage("Oops! Word not defined.");
          setTimeout(() => setMessage(""), 1500);
          return;
        }
        // Word exists, continue with game logic
        const { statusRow, newKeyboardStatus } = checkGuess(guess);
        const newStatusGrid = statusGrid.map((row, i) =>
          i === currentRow ? statusRow : row
        );
        setStatusGrid(newStatusGrid);
        setKeyboardStatus((prev) => ({ ...prev, ...newKeyboardStatus }));

        if (guess === wordOfTheDay) {
          const { m, s, ms } = getTimerParts(timer);
          setMessage(
            `Congratulations!\nYou guessed the word correctly in ${
              currentRow + 1
            } tries and ${m}:${s}:${ms} time`
          );
          setTimerActive(false);

            // animate winning row
          setRowAnimation((prev) => ({ ...prev, [currentRow]: "dance" }));
           // after a short delay, celebrate
          setTimeout(() => {
            setRowAnimation((prev) => ({ ...prev, [currentRow]: "win" }));
          }, 700);

          spawnCoins(7);
          spawnConfetti(40);
          spawnSparkles(25);

          setTimeout(() => {
            if (gameType === "daily" && typeof showLeaderboard === "function") {
              showLeaderboard(
                `Congratulations! You guessed the word in ${m}:${s}:${ms} time with ${
                  currentRow + 1
                } guesses`
              );
            }
          }, 2200);
          // Only save if daily challenge
          if (user && user.uid && gameType === "daily") {
            saveWordleResult({
              userId: user.uid,
              dateOfAttempt: getTodayIST(),
              timeTaken: timer,
              numberOfTries: currentRow + 1,
            });
          }

          // ...inside handleEnter, after a win, for unlogged users:
          if (!user && gameType === "daily") {
            localStorage.setItem(
              "wordle_last_result",
              JSON.stringify({
                userId: "anon-" + getTodayIST(), // unique per day for anonymous user
                name: "You",
                date: getTodayIST(),
                tries: currentRow + 1,
                timeTaken: timer,
              })
            );
          }

          
        } else if (currentRow === 5) {
          // Last attempt failed, show final message
          setMessage(`Game Over!\nThe word was ${wordOfTheDay}.`);
          setTimerActive(false);
            // animate shake on last wrong guess
          setRowAnimation((prev) => ({ ...prev, [currentRow]: "shake" }));

          // Store failed result for daily challenge
          if (gameType === "daily") {
            // For logged-in users
            if (user && user.uid) {
              saveWordleResult({
                userId: user.uid,
                dateOfAttempt: getTodayIST(),
                timeTaken: timer,
                numberOfTries: 7, // 7 means failed
              });
            }
            // For anonymous users
            if (!user) {
              localStorage.setItem(
                "wordle_last_result",
                JSON.stringify({
                  userId: "anon-" + getTodayIST(),
                  name: "You",
                  date: getTodayIST(),
                  tries: 7,
                  timeTaken: timer,
                })
              );
            }
          }
        } else {
          setCurrentRow(currentRow + 1);
          setCurrentCol(0);
            // animate shake for wrong guess
          setRowAnimation((prev) => ({ ...prev, [currentRow]: "shake" }));

        }
      });
  };

  // Check guess and return status for each letter
  const checkGuess = (guess) => {
    const answer = wordOfTheDay;
    let statusRow = Array(5).fill("");
    let answerArr = answer.split("");
    let guessArr = guess.split("");
    let used = Array(5).fill(false);
    let newKeyboardStatus = {};

    // First pass: correct positions (green)
    for (let i = 0; i < 5; i++) {
      if (guessArr[i] === answerArr[i]) {
        statusRow[i] = "correct";
        used[i] = true;
      }
    }
    // Second pass: present but wrong position (yellow)
    for (let i = 0; i < 5; i++) {
      if (statusRow[i]) continue;
      let found = false;
      for (let j = 0; j < 5; j++) {
        if (!used[j] && guessArr[i] === answerArr[j]) {
          found = true;
          used[j] = true;
          break;
        }
      }
      if (found) {
        statusRow[i] = "present";
      } else {
        statusRow[i] = "absent";
      }
    }

    // Keyboard coloring logic
    // For each unique letter in guess, check if all its occurrences are green
    for (let i = 0; i < 5; i++) {
      const letter = guessArr[i];
      if (!letter) continue;
      // Find all positions of this letter in guess
      const guessPositions = [];
      for (let k = 0; k < 5; k++) {
        if (guessArr[k] === letter) guessPositions.push(k);
      }
      // Count how many are green
      const greenCount = guessPositions.filter(
        (pos) => statusRow[pos] === "correct"
      ).length;
      // Count how many are present (yellow)
      const yellowCount = guessPositions.filter(
        (pos) => statusRow[pos] === "present"
      ).length;

      // Count how many times this letter is in the answer at the correct position
      const answerPositions = [];
      for (let k = 0; k < 5; k++) {
        if (answerArr[k] === letter) answerPositions.push(k);
      }
      const answerCount = answerPositions.length;

      if (greenCount === answerCount && greenCount > 0) {
        newKeyboardStatus[letter] = "correct";
      } else if (greenCount + yellowCount > 0) {
        newKeyboardStatus[letter] = "present";
      } else {
        newKeyboardStatus[letter] = "absent";
      }
    }

    return { statusRow, newKeyboardStatus };
  };

  // Add this helper inside your component
  const saveWordleResult = async ({
    userId,
    dateOfAttempt,
    timeTaken,
    numberOfTries,
  }) => {
    try {
      const db = getFirestore(getApp());
      const userDocRef = doc(db, "games", "wordle", "users", userId);

      await setDoc(
        userDocRef,
        {
          results: arrayUnion({
            dateOfAttempt,
            timeTaken,
            numberOfTries,
          }),
        },
        { merge: true }
      );
    } catch (e) {
      // Optionally handle error
      console.error("Failed to save Wordle result:", e);
    }
  };

  // Handle on-screen keyboard
  const handleKeyboardClick = (key) => {
    if (typeof playKeypadClick === "function" && soundOn) {
      playKeypadClick();
    }
    if (key === "ENTER") handleEnter();
    else if (key === "BACKSPACE") handleBackspace();
    else handleLetter(key);
    inputRef.current && inputRef.current.focus();
  };

  useEffect(() => {
  if (message.startsWith("Congratulations!")) {
    const audio = new Audio(winSound);
    audio.play();
  } else if (message.startsWith("Game Over!")) {
    const audio = new Audio(loseSound);
    audio.play();
  }
}, [message]);

  return (
  <div>
    {/* Main game UI */}
    {message &&
    (message.startsWith("Congratulations!") ||
      message.startsWith("Game Over!")) ? (
      <div
        className={
          message.startsWith("Congratulations!")
            ? "wordle-congrats-message"
            : "wordle-gameover-message"
        }
      >
        {message.split("\n").map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
        <button
          className="wordle-titlepage-btn"
          style={{ marginTop: "24px" }}
          onClick={() => {
            if (typeof onCloseGame === "function") {
              onCloseGame();
            }
            setGrid(getEmptyGrid());
            setStatusGrid(getEmptyStatusGrid());
            setCurrentRow(0);
            setCurrentCol(0);
            setKeyboardStatus({});
            setMessage("");
            setTimer(0);
            setTimerActive(true);
            if (gameType !== "daily") {
              (async () => {
                const db = getFirestore(getApp());
                const colRef = collection(
                  db,
                  "games",
                  "wordle",
                  "word_of_the_day"
                );
                const snap = await getDocs(colRef);
                const words = snap.docs.map((doc) =>
                  doc.data().word.toUpperCase()
                );
                if (words.length > 0) {
                  const randomWord =
                    words[Math.floor(Math.random() * words.length)];
                  setWordOfTheDay(randomWord);
                }
              })();
            }
          }}
        >
          Go Back Home
        </button>
      </div>
    ) : (
      <div
        className="wordle-container"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <input
          ref={inputRef}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          onKeyDown={handleKeyDown}
          inputMode="none"
          readOnly
          tabIndex={-1}
        />
        <div className="wordle-grid">
          {grid.map((row, rowIdx) => (
            <div
              className={`wordle-row ${rowAnimation[rowIdx] || ""}`}
              key={rowIdx}
              onAnimationEnd={() =>
                setRowAnimation((prev) => ({ ...prev, [rowIdx]: "" }))
              }
            >
              {row.map((cell, colIdx) => (
                <div
                  className={`wordle-cell ${
                    statusGrid[rowIdx][colIdx]
                      ? "flip " + statusGrid[rowIdx][colIdx]
                      : ""
                  }`}
                  key={colIdx}
                >
                  {cell}
                  {rowIdx === currentRow &&
                    colIdx === currentCol &&
                    currentCol < 5 && <span className="typing-cursor" />}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className="wordle-keyboard">
          {QWERTY_ROWS.map((row, i) => (
            <div className="wordle-key-row" key={i}>
              {i === 2 && (
                <button
                  className="wordle-key special"
                  onClick={() => handleKeyboardClick("ENTER")}
                >
                  ENTER
                </button>
              )}
              {row.map((key) => (
                <button
                  key={key}
                  className={`wordle-key ${
                    keyboardStatus[key] ? keyboardStatus[key] : ""
                  }`}
                  onClick={() => handleKeyboardClick(key)}
                  disabled={!!message}
                >
                  {key}
                </button>
              ))}
              {i === 2 && (
                <button
                  className="wordle-key special"
                  onClick={() => handleKeyboardClick("BACKSPACE")}
                >
                  ⌫
                </button>
              )}
            </div>
          ))}
        </div>
        {(() => {
          const { m, s, ms } = getTimerParts(timer);
          return (
            <div
              className="wordle-timer"
              style={{
                display: "flex",
                gap: "0.25em",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <span className="wordle-timer-minutes">{m}</span>
              <span>:</span>
              <span className="wordle-timer-seconds">{s}</span>
              <span>:</span>
              <span className="wordle-timer-ms">{ms}</span>
            </div>
          );
        })()}
      </div>
    )}

    {/* Bottom-right popup for error/info messages */}
    {message &&
      !(
        message.startsWith("Congratulations!") ||
        message.startsWith("Game Over!")
      ) && <div className="wordle-popup-message">{message}</div>}

    {/* Win coins overlay */}
    {coins.length > 0 && (
      <div className="coin-layer">
        {coins.map((c) => (
          <div
            key={c.id}
            className="coin"
            style={{
              ["--delay"]: `${c.delay}ms`,
              ["--stack"]: c.stack,
            }}
          >
            🪙
          </div>
        ))}
      </div>
    )}
  </div>
  );
};
export default Wordle;