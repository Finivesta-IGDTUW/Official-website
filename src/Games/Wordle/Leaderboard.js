import React, { useEffect, useState } from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  doc,
  arrayUnion,
  updateDoc,
} from "firebase/firestore";
import { getApp } from "firebase/app";
import "./Leaderboard.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SignInRegister from "./SignInRegister";

// Keep consistent: timeTaken must be in ms
function calculateScore({ tries, timeTaken }) {
  if (!tries || tries > 6) return 0;
  // Ensure timeTaken is treated as milliseconds
  const timeInMs = Math.floor(Number(timeTaken) || 0);
  const score = 100000 - tries * 10000 - timeInMs;
  return Math.max(0, score);
}

// Aggregate multiple results (average per attempt)
function aggregateScores(results) {
  if (!results.length) return 0;
  const total = results.reduce((acc, r) => acc + calculateScore(r), 0);
  return Math.round(total / results.length);
}


// Get today's date in IST (YYYY-MM-DD)
function getTodayIST() {
  const now = new Date();
  // IST offset is +5:30, or 330 minutes
  const istOffset = 330 * 60 * 1000;
  const istTime = new Date(
    now.getTime() + istOffset - now.getTimezoneOffset() * 60000
  );
  return istTime.toISOString().slice(0, 10);
}

const fetchAllUsersMap = async () => {
  const db = getFirestore(getApp());
  const usersCol = collection(db, "games", "wordle", "users");
  const usersSnap = await getDocs(usersCol);
  const userMap = {};
  usersSnap.forEach((doc) => {
    const data = doc.data();
    userMap[doc.id] =
      data.displayName || data.username || data.email || "Anonymous";
  });
  return userMap;
};

const fetchAllUserResults = async () => {
  const db = getFirestore(getApp());
  const usersCol = collection(db, "games", "wordle", "users");
  const usersSnap = await getDocs(usersCol);
  let allResults = [];
  usersSnap.forEach((doc) => {
    const data = doc.data();
    const name = data.displayName || data.name || "Anonymous";
    const userId = doc.id;
    (data.results || []).forEach((result) => {
      allResults.push({
        userId,
        name,
        date: result.dateOfAttempt,
        tries: result.numberOfTries,
        timeTaken: Number(result.timeTaken) || 0,
      });
    });
  });
  return allResults;
};

// Helper for colored medals
const medal = [
  <span className="medal goldpos" key="goldpos">
    🥇
  </span>,
  <span className="medal silverpos" key="silverpos">
    🥈
  </span>,
  <span className="medal bronzepos" key="bronzepos">
    🥉
  </span>,
];

const Leaderboard = ({
  message,
  user: userProp,
  miniatureBoard,
  setUser,
  soundOn = true,
  playClick = () => {},
}) => {
  const [period, setPeriod] = useState("day"); // "day", "week", "all"
  const [selectedDay, setSelectedDay] = useState(() => getTodayIST());
  const [selectedWeek, setSelectedWeek] = useState(() => {
    const now = new Date();
    // Convert now to IST
    const istOffset = 330 * 60 * 1000;
    const istNow = new Date(
      now.getTime() + istOffset - now.getTimezoneOffset() * 60000
    );
    const monday = new Date(istNow);
    monday.setDate(istNow.getDate() - istNow.getDay() + 1);
    return monday.toISOString().slice(0, 10);
  });
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [firstDay, setFirstDay] = useState(null);
  const [userDisplayMap, setUserDisplayMap] = useState({});
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showAddAnon, setShowAddAnon] = useState(true);
  const [anonResult, setAnonResult] = useState(null);
  const [localMessage, setLocalMessage] = useState("");

  const todayStr = getTodayIST();

  // Helper to move selectedDay by n days
  const moveDay = (n) => {
    const d = new Date(selectedDay + "T00:00:00+05:30");
    d.setDate(d.getDate() + n);
    // Always format as IST
    const istOffset = 330 * 60 * 1000;
    const istTime = new Date(
      d.getTime() + istOffset - d.getTimezoneOffset() * 60000
    );
    setSelectedDay(istTime.toISOString().slice(0, 10));
  };

  // Helper to move selectedWeek by n weeks
  const moveWeek = (n) => {
    const d = new Date(selectedWeek + "T00:00:00+05:30");
    d.setDate(d.getDate() + n * 7);
    // Always format as IST
    const istOffset = 330 * 60 * 1000;
    const istTime = new Date(
      d.getTime() + istOffset - d.getTimezoneOffset() * 60000
    );
    setSelectedWeek(istTime.toISOString().slice(0, 10));
  };

  // Helper to get week range string
  const getWeekRange = (mondayStr) => {
    const monday = new Date(mondayStr + "T00:00:00+05:30");
    const sunday = new Date(monday);
    sunday.setDate(monday.getDate() + 6);
    return (
      monday.toISOString().slice(0, 10) +
      " - " +
      sunday.toISOString().slice(0, 10)
    );
  };

  function getRankedLeaders(leaders, period) {
    if (!leaders || !leaders.length) return [];

    if (period === "day") {
      // Filter results for the selected IST date
       const filtered = leaders.filter((u) => u.date === selectedDay);
       return filtered
        .map((u) => ({
          ...u,
          score: calculateScore({ tries: u.tries, timeTaken: u.timeTaken }),
        }))
        .sort((a, b) => b.score - a.score);
    }

    if (period === "week") {
      // Get all dates in the selected week (IST)
      const weekStart = new Date(selectedWeek + "T00:00:00+05:30");
      const weekDates = [];
      for (let i = 0; i < 7; i++) {
        const d = new Date(weekStart);
        d.setDate(weekStart.getDate() + i);
        weekDates.push(d.toISOString().slice(0, 10));
      }
      // Filter results for the selected week
      const filtered = leaders.filter((user) => weekDates.includes(user.date));
      // Group by user, sum scores for the week, divide by days played
      const userMap = {};
       filtered.forEach((user) => {
        if (!userMap[user.userId]) {
          userMap[user.userId] = {
            name: user.name,
            results: []
          };
          
          
        }
        userMap[user.userId].results.push({ tries: user.tries, timeTaken: user.timeTaken });
        
        
      });
      return Object.entries(userMap)
        .map(([userId, data]) => ({ userId, name: data.name, score: aggregateScores(data.results), }))
        .sort((a, b) => b.score - a.score); 
    }
    if (period === "all") {
      const userMap = {};
      leaders.forEach((user) => {
        if (!userMap[user.userId]) {
          userMap[user.userId] = {
          name: user.name,
          results: []
        };
        
      }
      userMap[user.userId].results.push({ tries: user.tries, timeTaken: user.timeTaken });
      
    });
    return Object.entries(userMap)
      .map(([userId, data]) => ({
        userId,
        name: data.name,
        score: aggregateScores(data.results),
      }))
      .sort((a, b) => b.score - a.score); 
  }

    return [];
  }

  // ...before your return statement...
  let rankedLeaders = getRankedLeaders(leaders, period);

  // Add anonymous user's result for all periods (day, week, all)
  // Only add anonymous user's result if not logged in
  if (!userProp?.uid) {
  let anonResult = null;
  try {
    const lastResult = JSON.parse(localStorage.getItem("wordle_last_result"));
    if (lastResult) {
      // ENSURE: Convert time to milliseconds if needed
      const normalizedResult = {
        ...lastResult,
        timeTaken: Number(lastResult.timeTaken) || 0
      };

      // For day: only add if date matches
      if (period === "day" && normalizedResult.date === selectedDay) {
        anonResult = normalizedResult;
      }
      // For week: only add if date is in selected week
      if (period === "week") {
        const weekStart = new Date(selectedWeek + "T00:00:00+05:30");
        const weekDates = [];
        for (let i = 0; i < 7; i++) {
          const d = new Date(weekStart);
          d.setDate(weekStart.getDate() + i);
          weekDates.push(d.toISOString().slice(0, 10));
        }
        if (weekDates.includes(normalizedResult.date)) {
          anonResult = normalizedResult;
        }
      }
      // For all: always add
      if (period === "all") {
        anonResult = normalizedResult;
      }
    }
  } catch {}
    if (anonResult) {
      const anonScore = calculateScore({
        tries: anonResult.tries,
        timeTaken: anonResult.timeTaken,
      });
      // else score remains 0
      // For day/week: check userId+date, for all: check userId
      const alreadyInList =
        period === "all"
          ? rankedLeaders.some((u) => u.userId === anonResult.userId)
          : rankedLeaders.some(
              (u) =>
                u.userId === anonResult.userId && u.date === anonResult.date
            );
      if (!alreadyInList) {
        rankedLeaders.push({
          ...anonResult,
          userId: "anonymous",
          score: anonScore,
        });
        rankedLeaders = rankedLeaders.sort((a, b) => b.score - a.score);
      }
    }
  }

  // Fetch leaderboard data from Firebase
  //   useEffect(() => {
  //     const fetchLeaders = async () => {
  //       setLoading(true);
  //       const db = getFirestore(getApp());
  //       let q;
  //       if (period === "day") {
  //         q = query(
  //           collection(db, "wordle_leaderboard"),
  //           where("date", "==", selectedDay),
  //           orderBy("score", "desc"),
  //           limit(20)
  //         );
  //       } else if (period === "week") {
  //         q = query(
  //           collection(db, "wordle_leaderboard"),
  //           where("week", "==", selectedWeek),
  //           orderBy("score", "desc"),
  //           limit(20)
  //         );
  //       } else {
  //         q = query(
  //           collection(db, "wordle_leaderboard"),
  //           orderBy("score", "desc"),
  //           limit(20)
  //         );
  //       }
  //       const snap = await getDocs(q);
  //       setLeaders(
  //         snap.docs.map((doc) => ({
  //           id: doc.id,
  //           ...doc.data(),
  //         }))
  //       );
  //       setLoading(false);
  //     };
  //     fetchLeaders();
  //   }, [period, selectedDay, selectedWeek]);

  useEffect(() => {
    const fetchLeaders = async () => {
      setLoading(true);
      const [allResults, userMap] = await Promise.all([
        fetchAllUserResults(),
        fetchAllUsersMap(),
      ]);
      setLeaders(allResults);
      setUserDisplayMap(userMap);
      // Set firstDay from allResults
      if (allResults.length > 0) {
        const dates = allResults.map((r) => r.date);
        const minDate = dates.reduce((a, b) => (a < b ? a : b));
        setFirstDay(minDate);
      } else {
        setFirstDay(new Date().toISOString().slice(0, 10));
      }
      setLoading(false);
    };
    fetchLeaders();
  }, [period, selectedDay, selectedWeek, userProp]);


  // Replace all onClick handlers for arrows and options to play sound
  // Helper wrappers
  const handleMoveDay = (n) => {
    playClick && soundOn && playClick();
    moveDay(n);
  };
  const handleMoveWeek = (n) => {
    playClick && soundOn && playClick();
    moveWeek(n);
  };
  const handleSetPeriod = (p) => {
    playClick && soundOn && playClick();
    setPeriod(p);
  };

  // Automatically transfer localStorage result to Firebase for logged-in users
  useEffect(() => {
    const transferAnonToFirebase = async () => {
      try {
        const lastResult = JSON.parse(
          localStorage.getItem("wordle_last_result")
        );
        if (!lastResult || !userProp?.uid) return;
        // Check in Firebase if a result for this user and date already exists
        const db = getFirestore(getApp());
        const userDoc = doc(db, "games", "wordle", "users", userProp.uid);
        const userSnap = await getDocs(
          query(
            collection(db, "games", "wordle", "users")
            // No direct query for nested array, so fetch and filter
          )
        );
        let alreadyExists = false;
        userSnap.forEach((doc) => {
          if (doc.id === userProp.uid) {
            const data = doc.data();
            const results = data.results || [];
            alreadyExists = results.some(
              (r) => r.dateOfAttempt === lastResult.date
            );
          }
        });
        if (alreadyExists) {
          // Show message if already exists
          setShowAddAnon(false);
          setTimeout(() => {
            setShowAddAnon(true);
          }, 4000);
          setTimeout(() => {
            setLocalMessage(
              "Logged in. But you already have a result saved. No repeating like this bud."
            );
          }, 100);
          setTimeout(() => {
            setLocalMessage("");
          }, 4000);
          return;
        }
        // ...existing code...
        await updateDoc(userDoc, {
          results: arrayUnion({
            dateOfAttempt: lastResult.date,
            timeTaken: Number(lastResult.timeTaken) || 0,
            numberOfTries: lastResult.tries,
          }),
        });
        localStorage.removeItem("wordle_last_result");
        // Refresh leaderboard by refetching data
        const [allResults, userMap] = await Promise.all([
          fetchAllUserResults(),
          fetchAllUsersMap(),
        ]);
        setLeaders(allResults);
        setUserDisplayMap(userMap);
      } catch (err) {
        // Silent fail
      }
    };
    if (userProp?.uid && localStorage.getItem("wordle_last_result")) {
      transferAnonToFirebase();
    }
  }, [userProp, leaders]);

function formatTime(ms) {
  const totalMs = Number(ms) || 0;
  const totalSeconds = Math.floor(totalMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const milliseconds = totalMs % 1000;

  if (minutes > 0) {
    return `${minutes}:${seconds.toString().padStart(2, '0')}.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}`;
  } else {
    return `${seconds}.${Math.floor(milliseconds / 10).toString().padStart(2, '0')}s`;
  }
}

  return (
    <div className="leaderboard-container">
      {message && <div className="leaderboard-message">{message}</div>}

      {!userProp?.uid && showAddAnon && (
        <div className="leaderboard-add-anon-message">
          <span>Add this to Leaderboard?</span>
          <button
            className="leaderboard-add-btn"
            onClick={() => setShowLoginModal(true)}
          >
            Yes, add me in
          </button>
          <button
            className="leaderboard-pass-btn"
            onClick={() => setShowAddAnon(false)}
          >
            I'll pass
          </button>
        </div>
      )}

      {/* Automatically transfer previous score for logged-in users, no button shown */}

      {showLoginModal && (
        <SignInRegister
          show={showLoginModal}
          onClose={() => setShowLoginModal(false)}
          user={userProp}
          setUser={setUser}
          latestResult={anonResult}
        />
      )}

      <div className="leaderboard-toggle">
        <button
          className={period === "day" ? "active" : ""}
          onClick={() => handleSetPeriod("day")}
        >
          Day
        </button>
        <button
          className={period === "week" ? "active" : ""}
          onClick={() => handleSetPeriod("week")}
        >
          Week
        </button>
        <button
          className={period === "all" ? "active" : ""}
          onClick={() => handleSetPeriod("all")}
        >
          All Time
        </button>
      </div>
      {period === "day" && (
        <div className="leaderboard-select-arrows">
          <button
            className="leaderboard-arrow"
            onClick={() => handleMoveDay(-1)}
            aria-label="Previous Day"
            disabled={
              firstDay &&
              new Date(selectedDay + "T00:00:00+05:30") <=
                new Date(firstDay + "T00:00:00+05:30")
            }
            style={
              firstDay &&
              new Date(selectedDay + "T00:00:00+05:30") <=
                new Date(firstDay + "T00:00:00+05:30")
                ? { display: "none" }
                : undefined
            }
          >
            <FaChevronLeft />
          </button>
          <span className="leaderboard-date">{selectedDay}</span>
          <button
            className="leaderboard-arrow"
            onClick={() => handleMoveDay(1)}
            aria-label="Next Day"
            disabled={
              new Date(selectedDay + "T00:00:00+05:30") >=
              new Date(todayStr + "T00:00:00+05:30")
            }
            style={
              new Date(selectedDay + "T00:00:00+05:30") >=
              new Date(todayStr + "T00:00:00+05:30")
                ? { display: "none" }
                : undefined
            }
          >
            <FaChevronRight />
          </button>
        </div>
      )}
      {period === "week" && (
        <div className="leaderboard-select-arrows">
          {getWeekRange(selectedWeek) !== getWeekRange(todayStr) ? (
            <>
              <button
                className="leaderboard-arrow"
                onClick={() => handleMoveWeek(-1)}
                aria-label="Previous Week"
                disabled={selectedWeek <= firstDay}
                style={
                  selectedWeek <= firstDay ? { display: "none" } : undefined
                }
              >
                <FaChevronLeft />
              </button>
              <span className="leaderboard-date">
                {getWeekRange(selectedWeek)}
              </span>
              <button
                className="leaderboard-arrow"
                onClick={() => handleMoveWeek(1)}
                aria-label="Next Week"
                disabled={
                  // Disable if next week would be after or equal to today's week
                  new Date(selectedWeek + "T00:00:00+05:30").getTime() +
                    7 * 24 * 60 * 60 * 1000 >
                  new Date(todayStr + "T00:00:00+05:30").getTime()
                }
                style={
                  new Date(selectedWeek + "T00:00:00+05:30").getTime() +
                    7 * 24 * 60 * 60 * 1000 >
                  new Date(todayStr + "T00:00:00+05:30").getTime()
                    ? { display: "none" }
                    : undefined
                }
              >
                <FaChevronRight />
              </button>
            </>
          ) : (
            <span className="leaderboard-date">
              {getWeekRange(selectedWeek)}
            </span>
          )}
        </div>
      )}
      <div className="leaderboard-table">
        {loading ? (
          <div className="leaderboard-loading">Loading...</div>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {rankedLeaders.length === 0 && (
                <tr>
                  <td colSpan={3} style={{ textAlign: "center" }}>
                    No data found.
                  </td>
                </tr>
              )}

              {/* Show only top 10, but always show current user */}
              {(() => {
                // Find current user index
                let currentIdx = -1;
                let currentUserRow = null;
                rankedLeaders.forEach((user, idx) => {
                  const isCurrent =
                    (userProp?.uid &&
                      (period === "day"
                        ? user.userId === userProp?.uid
                        : user.userId === userProp?.uid)) ||
                    (!userProp?.uid &&
                      user.userId &&
                      localStorage.getItem("wordle_last_result") &&
                      (() => {
                        try {
                          const anon = JSON.parse(
                            localStorage.getItem("wordle_last_result")
                          );
                          return (
                            anon &&
                            anon.date === selectedDay &&
                            user.userId === "anonymous"
                          );
                        } catch {
                          return false;
                        }
                      })());
                  if (isCurrent) {
                    currentIdx = idx;
                    currentUserRow = user;
                  }
                });

                let displayRows = rankedLeaders.slice(0, 10);
                // If current user is not in top 10, replace 10th with current user
                if (currentIdx > 9 && currentUserRow) {
                  displayRows[9] = currentUserRow;
                }

                return displayRows.map((user, idx) => {
                  const isCurrent =
                    (userProp?.uid && user.userId === userProp?.uid) ||
                    (!userProp?.uid &&
                      user.userId &&
                      localStorage.getItem("wordle_last_result") &&
                      (() => {
                        try {
                          const anon = JSON.parse(
                            localStorage.getItem("wordle_last_result")
                          );
                          return (
                            anon &&
                            anon.date === selectedDay &&
                            user.userId === "anonymous"
                          );
                        } catch {
                          return false;
                        }
                      })());

                  return (
                    <tr
                      key={user.userId + (user.date || "")}              
                      className={isCurrent ? "highlight-current-user" : ""}
                    >
                      <td>
                        {idx < 3 ? (
                          <span
                            className={`medal ${
                              ["goldpos", "silverpos", "bronzepos"][idx]
                            }`}
                          >
                            {medal[idx]}
                          </span>
                        ) : (
                          <span className="rank-num">{idx + 1}</span>
                        )}
                      </td>
                      <td>
                        {userDisplayMap[user.userId] ||
                          user.name ||
                          "Anonymous"}
                      </td>
                      <td>
                        {user.score ?? "-"}
                      </td>
                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        )}
      </div>
      {message &&
        !(
          message.startsWith("Congratulations!") ||
          message.startsWith("Game Over!")
        ) && <div className="wordle-popup-message">{localMessage}</div>}
    </div>
  );
};

export default Leaderboard;
