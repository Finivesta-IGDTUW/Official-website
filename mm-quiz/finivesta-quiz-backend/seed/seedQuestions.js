const mongoose = require("mongoose");
require("dotenv").config();

const Question = require("../models/Question");
const { questions } = require("./questions");

const runSeed = async () => {
  const MONGO_URI = process.env.MONGO_URI || "";
  if (!MONGO_URI) {
    console.error("Missing MONGO_URI in environment.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    await Question.deleteMany({});
    await Question.insertMany(questions);
    console.log(`Seeded ${questions.length} finance questions.`);
    process.exit(0);
  } catch (error) {
    console.error("Failed to seed questions", error);
    process.exit(1);
  }
};

runSeed();
