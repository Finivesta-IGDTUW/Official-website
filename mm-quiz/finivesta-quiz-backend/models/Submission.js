const mongoose = require("mongoose");

const SubmissionSchema = new mongoose.Schema(
  {
    sessionId: { type: String, required: true, unique: true },
    quizNumber: { type: Number, required: true, min: 1 },
    playerId: { type: mongoose.Schema.Types.ObjectId, ref: "Player", required: true },
    answers: [
      {
        questionId: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },
        optionIndex: { type: Number },
        correct: { type: Boolean },
      },
    ],
    score: { type: Number, required: true },
    totalQuestions: { type: Number, required: true },
    timeTakenMs: { type: Number, required: true },
    submittedAt: { type: Date, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Submission", SubmissionSchema);
