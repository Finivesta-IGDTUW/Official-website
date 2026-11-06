const QuizSettings = require("../models/QuizSettings");

const getQuizSettings = async () => {
  let settings = await QuizSettings.findOne();
  if (!settings) {
    settings = await QuizSettings.create({
      questionCount: 10,
      durationMs: 300000,
      currentQuizNumber: 1,
    });
  }

  if (!settings.currentQuizNumber || settings.currentQuizNumber < 1) {
    settings.currentQuizNumber = 1;
    await settings.save();
  }

  return settings;
};

const getQuizLabel = (quizNumber) => `Quiz ${quizNumber}`;

const parseQuizNumber = (value) => {
  if (value === undefined || value === null || value === "") {
    return null;
  }

  const parsed = Number(value);
  if (!Number.isInteger(parsed) || parsed < 1) {
    return null;
  }

  return parsed;
};

module.exports = {
  getQuizSettings,
  getQuizLabel,
  parseQuizNumber,
};
