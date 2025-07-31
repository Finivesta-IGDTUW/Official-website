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
        timeTaken: result.timeTaken,
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

  // ...before your return statement...
  let rankedLeaders = getRankedLeaders(leaders, period);

  // Add anonymous user's result for all periods (day, week, all)
  // Only add anonymous user's result if not logged in
  if (!userProp?.uid) {
    let anonResult = null;
    try {
      const lastResult = JSON.parse(localStorage.getItem("wordle_last_result"));
      if (lastResult) {
        // For day: only add if date matches
        if (period === "day" && lastResult.date === selectedDay) {
          anonResult = lastResult;
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
          if (weekDates.includes(lastResult.date)) {
            anonResult = lastResult;
          }
        }
        // For all: always add
        if (period === "all") {
          anonResult = lastResult;
        }
      }
    } catch {}
    if (anonResult) {
      let anonScore = 0;
      if (anonResult.tries <= 6) {
        anonScore = Math.max(
          1000,
          10000 - (anonResult.tries * 1000 + anonResult.timeTaken)
        );
      } // else score remains 0
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

  function getRankedLeaders(leaders, period) {
    if (period === "day") {
      // Filter results for the selected IST date
      const filtered = leaders.filter((user) => user.date === selectedDay);
      return filtered
        .map((user) => {
          let score = 0;
          if (user.tries <= 6) {
            score = Math.max(
              1000,
              10000 - (user.tries * 1000 + user.timeTaken)
            );
          }
          return {
            ...user,
            score,
          };
        })
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
        let score = 0;
        if (user.tries <= 6) {
          score = Math.max(1000, 10000 - (user.tries * 1000 + user.timeTaken));
        }
        if (!userMap[user.userId]) {
          userMap[user.userId] = {
            name: user.name,
            scores: [],
          };
        }
        userMap[user.userId].scores.push(score);
      });
      return Object.entries(userMap)
        .map(([userId, data]) => ({
          id: userId,
          name: data.name,
          score: Math.round(
            data.scores.reduce((a, b) => a + b, 0) / data.scores.length
          ),
        }))
        .sort((a, b) => b.score - a.score);
    }
    if (period === "all") {
      // Group by user, sum all scores, apply streak bonus if you want
      const userMap = {};
      leaders.forEach((user) => {
        let score = 0;
        if (user.tries <= 6) {
          score = Math.max(1000, 10000 - (user.tries * 1000 + user.timeTaken));
        }
        if (!userMap[user.userId]) {
          userMap[user.userId] = {
            name: user.name,
            scores: [],
          };
        }
        userMap[user.userId].scores.push({ date: user.date, score });
      });
      // Optionally, add streak logic here
      return Object.entries(userMap)
        .map(([userId, data]) => ({
          id: userId,
          name: data.name,
          score: data.scores.reduce((a, b) => a + b.score, 0),
        }))
        .sort((a, b) => b.score - a.score);
    }
    return [];
  }

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
        // Check if this result is already present for this user
        const alreadyExists = leaders.some(
          (u) =>
            u.userId === userProp.uid &&
            u.date === lastResult.date &&
            u.timeTaken === lastResult.timeTaken &&
            u.numberOfTries === lastResult.tries
        );
        if (alreadyExists) return;
        const db = getFirestore(getApp());
        const userDoc = doc(db, "games", "wordle", "users", userProp.uid);
        await updateDoc(userDoc, {
          results: arrayUnion({
            dateOfAttempt: lastResult.date,
            timeTaken: lastResult.timeTaken,
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
                        : user.id === userProp?.uid)) ||
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
                            user.userId === anon.userId &&
                            user.date === anon.date
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
                    (userProp?.uid &&
                      (period === "day"
                        ? user.userId === userProp?.uid
                        : user.id === userProp?.uid)) ||
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
                            user.userId === anon.userId &&
                            user.date === anon.date
                          );
                        } catch {
                          return false;
                        }
                      })());

                  return (
                    <tr
                      key={period === "day" ? user.userId + user.date : user.id}
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
                      <td>{user.score}</td>
                    </tr>
                  );
                });
              })()}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
