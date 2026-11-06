const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const quizRoutes = require("./routes/quiz");
const leaderboardRoutes = require("./routes/leaderboard");

const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || "";

app.set("trust proxy", 1);
app.use(helmet());
app.use(
  cors({
    origin: [
      process.env.CLIENT_ORIGIN || "http://localhost:3000",
      "https://finivesta-quiz-frontend.vercel.app",
      "https://finivesta-quiz-frontend-git-main-harilynn.vercel.app",
      /\.vercel\.app$/
    ],
    credentials: true,
  })
);
app.use(express.json({ limit: "1mb" }));

const quizLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30,
});

app.use("/quiz", quizLimiter, quizRoutes);
app.use("/leaderboard", leaderboardRoutes);

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const startServer = async () => {
  if (!MONGO_URI) {
    console.error("Missing MONGO_URI in environment.");
    process.exit(1);
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Quiz server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  }
};

startServer();
