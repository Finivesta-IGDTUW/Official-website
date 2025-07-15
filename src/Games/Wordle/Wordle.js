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

const Wordle = ({ showLeaderboard, user, gameType }) => {
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

  // Fetch today's word from Firestore if daily game
  useEffect(() => {
    async function fetchWord() {
      const db = getFirestore(getApp());
      if (gameType === "daily") {
        const colRef = collection(db, "games", "wordle", "word_of_the_day");
        const today = getTodayIST();
        const q = query(colRef, where("date", "==", today));
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
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setTimer((t) => t + 10); // update every 10ms
      }, 10);
    }
    return () => clearInterval(interval);
  }, [timerActive]);

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
  const formatTimer = (t) => {
    const m = String(Math.floor(t / 60000)).padStart(2, "0");
    const s = String(Math.floor((t % 60000) / 1000)).padStart(2, "0");
    const ms = String(Math.floor((t % 1000) / 10)).padStart(2, "0");
    return `${m}:${s}:${ms}`;
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
    const { statusRow, newKeyboardStatus } = checkGuess(guess);
    const newStatusGrid = statusGrid.map((row, i) =>
      i === currentRow ? statusRow : row
    );
    setStatusGrid(newStatusGrid);
    setKeyboardStatus((prev) => ({ ...prev, ...newKeyboardStatus }));

    if (guess === wordOfTheDay) {
      setMessage(
        `Congratulations!\nYou guessed the word correctly in ${
          currentRow + 1
        } tries and ${formatTimer(timer)} time`
      );
      setTimerActive(false);

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

      if (gameType === "daily" && typeof showLeaderboard === "function") {
        setTimeout(() => {
          showLeaderboard(
            `Congratulations! You guessed the word in ${formatTimer(
              timer
            )} time with ${currentRow + 1} guesses`
          );
        }, 1200);
      }
    } else if (currentRow === 5) {
      setMessage(`Game Over! The word was ${wordOfTheDay}`);
    } else {
      setCurrentRow(currentRow + 1);
      setCurrentCol(0);
    }
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
    if (key === "ENTER") handleEnter();
    else if (key === "BACKSPACE") handleBackspace();
    else handleLetter(key);
    inputRef.current && inputRef.current.focus();
  };

  return (
    <div>
      {message && message.startsWith("Congratulations!") ? (
        <div className="wordle-congrats-message">
          {message.split("\n").map((line, idx) => (
            <div key={idx}>{line}</div>
          ))}
          <button
            className="wordle-titlepage-btn"
            style={{ marginTop: "24px" }}
            onClick={() => {
              setGrid(getEmptyGrid());
              setStatusGrid(getEmptyStatusGrid());
              setCurrentRow(0);
              setCurrentCol(0);
              setKeyboardStatus({});
              setMessage("");
              setTimer(0);
              setTimerActive(true);
              // Optionally, fetch a new word for normal game
              if (gameType !== "daily") {
                // Fetch a new random word from Firestore
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
            Play Again
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
          />
          <div className="wordle-grid">
            {grid.map((row, rowIdx) => (
              <div className="wordle-row" key={rowIdx}>
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
          <div className="wordle-timer">{formatTimer(timer)}</div>
        </div>
      )}
    </div>
  );
};

export default Wordle;
