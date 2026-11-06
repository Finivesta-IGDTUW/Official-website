const mongoose = require("mongoose");

const QuizSessionSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    quizNumber: { type: Number, required: true, min: 1 },
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player", required: true },
    questionIds: [{ type: mongoose.Schema.Types.ObjectId, ref: "Question" }],
    startedAt: { type: Date, required: true },
    expiresAt: { type: Date, required: true },
    durationMs: { type: Number, required: true },
    submittedAt: { type: Date },
    score: { type: Number },
    timeTakenMs: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizSession", QuizSessionSchema);
