const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");

initializeApp({ credential: applicationDefault() });
const db = getFirestore();

// List of 5-letter finance-related words
const words = [
  "LOANS",
  "BONDS",
  "FUNDS",
  "ASSET",
  "STOCK",
  "MONEY",
  "DEBIT",
  "QUOTE",
  "PRICE",
  "COSTS",
  "RATES",
  "YIELD",
  "SHARE",
  "VALUE",
  "TRADE",
  "BONUS",
  "OFFER",
  "MERGE",
  "RECAP",
  "TRUST",
  "INDEX",
  "BILLS",
  "TAXES",
  "REPOS",
  "FEESY",
  "CASHY",
  "EQUIT",
  "REITS",
  "BIDES",
  "RECAP",
];

// Helper to get date string in IST (YYYY-MM-DD) for a given offset from July 15, 2025
function getISTDateFromOffset(offset) {
  const base = new Date("2025-07-15T00:00:00+05:30");
  base.setDate(base.getDate() + offset);
  return base.toISOString().slice(0, 10);
}

async function saveWordsWithDates() {
  for (let i = 0; i < words.length; i++) {
    const date = getISTDateFromOffset(i);
    await db
      .collection("games")
      .doc("wordle")
      .collection("word_of_the_day")
      .add({
        word: words[i],
        date: date,
      });
    console.log(`Saved ${words[i]} for ${date}`);
  }
  console.log("All words saved!");
}

saveWordsWithDates();
