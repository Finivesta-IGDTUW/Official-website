const Submission = require("../models/Submission");

const buildQuizFilter = (quizNumber) => {
  if (!quizNumber) {
    return {};
  }

  // Backward compatibility for existing records created before quizNumber existed.
  if (quizNumber === 1) {
    return {
      $or: [{ quizNumber: 1 }, { quizNumber: { $exists: false } }],
    };
  }

  return { quizNumber };
};

const getLeaderboardEntries = async ({ limit, quizNumber } = {}) => {
  const matchStage = buildQuizFilter(quizNumber);
  const pipeline = [
    { $match: matchStage },
    { $sort: { score: -1, timeTakenMs: 1, submittedAt: 1 } },
    {
      $lookup: {
        from: "players",
        localField: "playerId",
        foreignField: "_id",
        as: "player",
      },
    },
    { $unwind: "$player" },
    {
      $project: {
        sessionId: 1,
        quizNumber: { $ifNull: ["$quizNumber", 1] },
        score: 1,
        totalQuestions: 1,
        timeTakenMs: 1,
        submittedAt: 1,
        playerName: "$player.name",
      },
    },
  ];

  const parsedLimit = Number(limit);
  if (Number.isFinite(parsedLimit) && parsedLimit > 0) {
    pipeline.splice(2, 0, { $limit: parsedLimit });
  }

  const entries = await Submission.aggregate(pipeline);

  return entries;
};

const getAvailableQuizzes = async () => {
  const quizzes = await Submission.aggregate([
    {
      $project: {
        quizNumber: { $ifNull: ["$quizNumber", 1] },
      },
    },
    {
      $group: {
        _id: "$quizNumber",
        attempts: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        quizNumber: "$_id",
        attempts: 1,
      },
    },
    { $sort: { quizNumber: 1 } },
  ]);

  return quizzes;
};

module.exports = { getLeaderboardEntries, getAvailableQuizzes, buildQuizFilter };
