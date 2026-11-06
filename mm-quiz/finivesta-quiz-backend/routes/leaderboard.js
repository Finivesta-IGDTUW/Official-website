const express = require("express");
const { leaderboardEmitter } = require("../utils/leaderboardEmitter");
const { getLeaderboardEntries, getAvailableQuizzes } = require("../utils/leaderboard");
const { getQuizSettings, getQuizLabel, parseQuizNumber } = require("../utils/quizSettings");

const router = express.Router();

const parseLeaderboardLimit = (value, fallback = 20) => {
  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  if (String(value).toLowerCase() === "all") {
    return undefined;
  }

  const parsed = Number(value);
  if (Number.isFinite(parsed) && parsed > 0) {
    return parsed;
  }

  return fallback;
};

router.get("/", async (req, res) => {
  try {
    const limit = parseLeaderboardLimit(req.query.limit, 20);
    const requestedQuiz = parseQuizNumber(req.query.quizNumber);
    const settings = await getQuizSettings();
    const quizNumber = requestedQuiz || settings.currentQuizNumber;
    const entries = await getLeaderboardEntries({ limit, quizNumber });
    return res.json({
      quizNumber,
      quizLabel: getQuizLabel(quizNumber),
      entries,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch leaderboard." });
  }
});

router.get("/quizzes", async (req, res) => {
  try {
    const settings = await getQuizSettings();
    const quizzes = await getAvailableQuizzes();

    return res.json({
      currentQuizNumber: settings.currentQuizNumber,
      quizzes: quizzes.map((quiz) => ({
        quizNumber: quiz.quizNumber,
        quizLabel: getQuizLabel(quiz.quizNumber),
        attempts: quiz.attempts,
      })),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch quiz history." });
  }
});

router.get("/stream", async (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.flushHeaders();

  const requestedQuiz = parseQuizNumber(req.query.quizNumber);
  const limit = parseLeaderboardLimit(req.query.limit, 20);
  const settings = await getQuizSettings();
  const quizNumber = requestedQuiz || settings.currentQuizNumber;

  const sendEntries = async () => {
    const entries = await getLeaderboardEntries({ limit, quizNumber });
    res.write(
      `data: ${JSON.stringify({ quizNumber, quizLabel: getQuizLabel(quizNumber), entries })}\n\n`
    );
  };

  await sendEntries();

  const handler = async (payload = {}) => {
    if (payload.quizNumber && payload.quizNumber !== quizNumber) {
      return;
    }

    const entries = await getLeaderboardEntries({ limit, quizNumber });
    res.write(
      `data: ${JSON.stringify({ quizNumber, quizLabel: getQuizLabel(quizNumber), entries })}\n\n`
    );
  };

  leaderboardEmitter.on("update", handler);

  req.on("close", () => {
    leaderboardEmitter.off("update", handler);
    res.end();
  });
});

module.exports = router;
