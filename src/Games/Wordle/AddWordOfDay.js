const admin = require("firebase-admin");
const serviceAccount = require("../../../finivestagames-firebase-adminsdk-fbsvc-f7e4b3f497.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

// const words = [
//   "CENTS",
//   "TAXED",
//   "CRUDE",
//   "RATIO",
//   "LOBBY",
//   "LEVER",
//   "COVER",
//   "TREND",
//   "RISKY",
//   "CLAIM",
//   "FRAUD",
//   "UNION",
//   "FIXED",
//   "RATED",
//   "GILTS",
//   "FLOAT",
//   "CHART",
//   "FUNNY",
//   "MINUS",
//   "LOOSE",
//   "WAGES",
//   "SPEND",
//   "GRANT",
//   "TITHE",
//   "LIMIT",
//   "CARRY",
//   "CYCLE",
//   "DEPOT",
//   "BASIS",
//   "TRUST",
// ];

const words = [
  "LEDGE", "TREND", "MONEY", "CASHY", "BONDS", "STOCK", "VAULT", "FUNDY",
  "LOANS", "RECAP", "TALLY", "TOKEN", "EQUIP", "ASSET", "QUOTE", "PAYEE",
  "CREDIT", "DIVID", "RATES", "PRIME", "VALUE", "MERGE", "GRANT", "RATIO",
  "FIXED", "FUNDS", "TITHE", "BANKS", "REPOS", "OFFER", "PRICE", "YIELD",
  "SPEND", "CLAWS", "LEDGE", "FUNNY", "CYCLE", "LOOSE", "INDEX", "DEBIT"
];

const startDate = "2025-09-09"; // Set to the next date after your last entry

function getISTDateFromOffset(offset) {
  const base = new Date(`${startDate}T00:00:00+05:30`);
  base.setDate(base.getDate() + offset);
  return base.toISOString().slice(0, 10);
}

async function addWords() {
  // Fetch all existing dates and words
  const snap = await db
    .collection("games")
    .doc("wordle")
    .collection("word_of_the_day")
    .get();
  const existingDates = new Set();
  const existingWords = new Set();
  snap.forEach((doc) => {
    const data = doc.data();
    if (data.date) existingDates.add(data.date);
    if (data.word) existingWords.add(data.word.toUpperCase());
  });

  let added = 0;
  // for (let i = 0; i < words.length; i++) {
  //   const date = getISTDateFromOffset(i);
  //   const word = words[i].toUpperCase();
  //   if (existingDates.has(date)) {
  //     console.log(`Skipping: ${word} for ${date} (date already exists)`);
  //     continue;
  //   }
  //   if (existingWords.has(word)) {
  //     console.log(`Skipping: ${word} for ${date} (word already exists)`);
  //     continue;
  //   }
  //   await db
  //     .collection("games")
  //     .doc("wordle")
  //     .collection("word_of_the_day")
  //     .add({
  //       word: word,
  //       date: date,
  //     });
  //   console.log(`Added: ${word} for ${date}`);
  //   added++;
  // }

  let dateOffset = 0; // start from 0, increment only when a date is taken

for (let i = 0; i < words.length; i++) {
  const word = words[i].toUpperCase();

  if (existingWords.has(word)) {
    console.log(`Skipping: ${word} (word already exists)`);
    continue; // skip only duplicate words
  }

  let date;
  // find the next available date
  do {
    date = getISTDateFromOffset(dateOffset);
    dateOffset++;
  } while (existingDates.has(date));

  // now date is free
  await db
    .collection("games")
    .doc("wordle")
    .collection("word_of_the_day")
    .add({
      word: word,
      date: date,
    });

  console.log(`Added: ${word} for ${date}`);
  added++;

  // mark as existing
  existingDates.add(date);
  existingWords.add(word);
}

  console.log(
    `All new words added! (${added} new, ${words.length - added} skipped)`
  );
}

addWords().catch(console.error);
