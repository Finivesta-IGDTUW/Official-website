const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    prompt: { type: String, required: true, trim: true },
    options: { type: [String], required: true },
    correctIndex: { type: Number, required: true },
    category: { type: String, default: "Finance" },
    adminCreated: { type: Boolean, default: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Question", QuestionSchema);
