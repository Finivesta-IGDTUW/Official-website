const express = require("express");
const crypto = require("crypto");
const Question = require("../models/Question");
const Player = require("../models/Player");
const QuizSession = require("../models/QuizSession");
const Submission = require("../models/Submission");
const { secureShuffle } = require("../utils/shuffle");
const { leaderboardEmitter } = require("../utils/leaderboardEmitter");
const { getLeaderboardEntries, buildQuizFilter } = require("../utils/leaderboard");
const { getQuizSettings, getQuizLabel, parseQuizNumber } = require("../utils/quizSettings");

const router = express.Router();

const sanitizeQuestion = (question) => ({
  id: question._id.toString(),
  prompt: question.prompt,
  options: question.options,
  category: question.category,
  difficulty: question.difficulty,
});

router.post("/start", async (req, res) => {
  try {
    const { name, email, organization } = req.body || {};
    if (!name || !name.trim()) {
      return res.status(400).json({ error: "Name is required." });
    }

    const settings = await getQuizSettings();
    const questionCount = settings.questionCount;
    const durationMs = settings.durationMs;
    const quizNumber = settings.currentQuizNumber;

    const questions = await Question.find({ adminCreated: true }).lean();
    if (!questions.length || questions.length < questionCount) {
      return res.status(400).json({ error: "Not enough questions available." });
    }

    const selected = secureShuffle(questions).slice(0, questionCount);
    const player = await Player.create({
      name: name.trim(),
      email: email ? email.trim() : undefined,
      organization: organization ? organization.trim() : undefined,
    });

    const sessionId = crypto.randomUUID();
    const startedAt = new Date();
    const expiresAt = new Date(startedAt.getTime() + durationMs);

    await QuizSession.create({
      sessionId,
      quizNumber,
      playerId: player._id,
      questionIds: selected.map((question) => question._id),
      startedAt,
      expiresAt,
      durationMs,
    });

    return res.json({
      sessionId,
      player: {
        id: player._id,
        name: player.name,
      },
      questions: selected.map(sanitizeQuestion),
      startedAt: startedAt.getTime(),
      expiresAt: expiresAt.getTime(),
      durationMs,
      quizNumber,
      quizLabel: getQuizLabel(quizNumber),
      serverTime: Date.now(),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to start quiz session." });
  }
});

router.get("/session/:sessionId", async (req, res) => {
  try {
    const { sessionId } = req.params;
    const session = await QuizSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({ error: "Session not found." });
    }

    if (session.submittedAt) {
      return res.status(409).json({ error: "Session already submitted." });
    }

    const now = Date.now();
    if (now > session.expiresAt.getTime()) {
      return res.status(410).json({ error: "Session expired." });
    }

    const questions = await Question.find({ _id: { $in: session.questionIds } }).lean();
    const questionMap = new Map(questions.map((question) => [question._id.toString(), question]));
    const ordered = session.questionIds
      .map((id) => questionMap.get(id.toString()))
      .filter(Boolean)
      .map(sanitizeQuestion);

    return res.json({
      sessionId: session.sessionId,
      questions: ordered,
      startedAt: session.startedAt.getTime(),
      expiresAt: session.expiresAt.getTime(),
      durationMs: session.durationMs,
      quizNumber: session.quizNumber || 1,
      quizLabel: getQuizLabel(session.quizNumber || 1),
      serverTime: Date.now(),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to load session." });
  }
});

router.post("/submit", async (req, res) => {
  try {
    const { sessionId, answers = [] } = req.body || {};
    if (!sessionId) {
      return res.status(400).json({ error: "Session ID is required." });
    }

    const session = await QuizSession.findOne({ sessionId });
    if (!session) {
      return res.status(404).json({ error: "Session not found." });
    }

    if (session.submittedAt) {
      return res.status(409).json({ error: "Session already submitted." });
    }

    const questionDocs = await Question.find({ _id: { $in: session.questionIds } }).lean();
    const questionMap = new Map(questionDocs.map((question) => [question._id.toString(), question]));

    let score = 0;
    const detailedAnswers = answers
      .map((answer) => {
        const question = questionMap.get(answer.questionId);
        if (!question) return null;
        const correct = answer.optionIndex === question.correctIndex;
        if (correct) {
          score += 1;
        }
        return {
          questionId: question._id,
          optionIndex: answer.optionIndex,
          correct,
        };
      })
      .filter(Boolean);

    const now = Date.now();
    const timeTakenMs = Math.min(now - session.startedAt.getTime(), session.durationMs);
    const totalQuestions = session.questionIds.length;

    const submission = await Submission.create({
      sessionId,
      quizNumber: session.quizNumber || 1,
      playerId: session.playerId,
      answers: detailedAnswers,
      score,
      totalQuestions,
      timeTakenMs,
      submittedAt: new Date(),
    });

    session.submittedAt = new Date();
    session.score = score;
    session.timeTakenMs = timeTakenMs;
    await session.save();

    const activeQuizNumber = session.quizNumber || 1;
    const entries = await getLeaderboardEntries({ limit: 20, quizNumber: activeQuizNumber });
    leaderboardEmitter.emit("update", { quizNumber: activeQuizNumber, entries });

    return res.json({
      sessionId,
      submissionId: submission._id,
      score,
      totalQuestions,
      timeTakenMs,
      quizNumber: activeQuizNumber,
      quizLabel: getQuizLabel(activeQuizNumber),
      leaderboard: entries,
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to submit quiz." });
  }
});

// Admin: Create question
router.post("/admin/questions", async (req, res) => {
  try {
    const { adminCode, prompt, options, correctIndex, category } = req.body || {};
    
    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(403).json({ error: "Invalid admin code." });
    }

    if (!prompt || !options || options.length !== 4 || correctIndex === undefined) {
      return res.status(400).json({ error: "Invalid question data." });
    }

    const question = await Question.create({
      prompt: prompt.trim(),
      options,
      correctIndex,
      category: category || "Finance",
      adminCreated: true,
    });

    return res.json({
      success: true,
      question: sanitizeQuestion(question),
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to create question." });
  }
});

// Admin: Get all questions
router.get("/admin/questions", async (req, res) => {
  try {
    const { adminCode } = req.query;
    
    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(403).json({ error: "Invalid admin code." });
    }

    const questions = await Question.find({ adminCreated: true }).lean();
    const settings = await getQuizSettings();
    
    return res.json({
      questions: questions.map((q) => ({
        id: q._id.toString(),
        prompt: q.prompt,
        options: q.options,
        correctIndex: q.correctIndex,
        category: q.category,
      })),
      config: {
        questionCount: settings.questionCount,
        durationMs: settings.durationMs,
        currentQuizNumber: settings.currentQuizNumber,
        currentQuizLabel: getQuizLabel(settings.currentQuizNumber),
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to fetch questions." });
  }
});

// Admin: Delete question
router.delete("/admin/questions/:id", async (req, res) => {
  try {
    const { adminCode } = req.body || {};
    
    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(403).json({ error: "Invalid admin code." });
    }

    await Question.findByIdAndDelete(req.params.id);
    return res.json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Failed to delete question." });
  }
});

// Admin: Update quiz settings
router.put("/admin/settings", async (req, res) => {
  try {
    const { adminCode, questionCount, durationMs } = req.body || {};
    
    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(403).json({ error: "Invalid admin code." });
    }

    if (questionCount !== undefined && (questionCount < 1 || questionCount > 100)) {
      return res.status(400).json({ error: "Question count must be between 1 and 100." });
    }

    const availableQuestionCount = await Question.countDocuments({ adminCreated: true });
    if (questionCount !== undefined && questionCount > availableQuestionCount) {
      return res.status(400).json({
        error: `Question count cannot exceed available questions (${availableQuestionCount}).`,
      });
    }

    if (durationMs !== undefined && durationMs < 30000) {
      return res.status(400).json({ error: "Duration must be at least 30 seconds." });
    }

    const settings = await getQuizSettings();
    if (questionCount !== undefined) settings.questionCount = questionCount;
    if (durationMs !== undefined) settings.durationMs = durationMs;
    await settings.save();

    return res.json({
      success: true,
      config: {
        questionCount: settings.questionCount,
        durationMs: settings.durationMs,
        currentQuizNumber: settings.currentQuizNumber,
        currentQuizLabel: getQuizLabel(settings.currentQuizNumber),
      },
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to update settings." });
  }
});

router.post("/admin/quizzes/advance", async (req, res) => {
  try {
    const { adminCode } = req.body || {};

    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(403).json({ error: "Invalid admin code." });
    }

    const settings = await getQuizSettings();
    settings.currentQuizNumber = (settings.currentQuizNumber || 1) + 1;
    await settings.save();

    return res.json({
      success: true,
      currentQuizNumber: settings.currentQuizNumber,
      currentQuizLabel: getQuizLabel(settings.currentQuizNumber),
      message: "Advanced to the next quiz. Previous leaderboard records are retained.",
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to advance quiz." });
  }
});

router.delete("/admin/leaderboard", async (req, res) => {
  try {
    const { adminCode, quizNumber } = req.body || {};
    if (adminCode !== "LongLiveAdmins01234") {
      return res.status(401).json({ error: "Invalid admin code." });
    }

    const settings = await getQuizSettings();
    const parsedQuizNumber = parseQuizNumber(quizNumber) || settings.currentQuizNumber;
    const filter = buildQuizFilter(parsedQuizNumber);

    const sessionsToDelete = await QuizSession.find(filter, { _id: 1, playerId: 1 }).lean();
    const sessionIds = sessionsToDelete.map((session) => session.sessionId);
    const playerIds = sessionsToDelete.map((session) => session.playerId);

    await QuizSession.deleteMany(filter);
    await Submission.deleteMany(filter);

    if (playerIds.length) {
      const usedElsewhere = await QuizSession.distinct("playerId", {
        playerId: { $in: playerIds },
      });

      const usedSet = new Set(usedElsewhere.map((id) => id.toString()));
      const removablePlayerIds = playerIds
        .map((id) => id.toString())
        .filter((id, index, arr) => arr.indexOf(id) === index)
        .filter((id) => !usedSet.has(id));

      if (removablePlayerIds.length) {
        await Player.deleteMany({ _id: { $in: removablePlayerIds } });
      }
    }

    leaderboardEmitter.emit("update", { quizNumber: parsedQuizNumber, entries: [] });

    return res.json({
      success: true,
      quizNumber: parsedQuizNumber,
      quizLabel: getQuizLabel(parsedQuizNumber),
      deletedSessions: sessionIds.length,
      message: "Leaderboard cleared successfully for the selected quiz."
    });
  } catch (error) {
    return res.status(500).json({ error: "Failed to clear leaderboard." });
  }
});

module.exports = router;
