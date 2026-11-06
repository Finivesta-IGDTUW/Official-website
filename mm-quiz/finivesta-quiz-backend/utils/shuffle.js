const crypto = require("crypto");

const secureShuffle = (items) => {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = crypto.randomInt(0, i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

module.exports = { secureShuffle };
