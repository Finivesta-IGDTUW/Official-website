const mongoose = require("mongoose");

const QuizSettingsSchema = new mongoose.Schema(
  {
    questionCount: { type: Number, default: 10, min: 1, max: 100 },
    durationMs: { type: Number, default: 300000, min: 30000 },
    currentQuizNumber: { type: Number, default: 1, min: 1 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("QuizSettings", QuizSettingsSchema);
