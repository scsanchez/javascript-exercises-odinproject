const palindromes = function (str) {
  const letters = str
    .toLowerCase()
    .split(/[\s,!\.]/)
    .join("");
  const half = Math.floor(letters.length / 2);
  for (let i = 0; i < half; ++i) {
    const start = letters[i];
    const end = letters[letters.length - 1 - i];
    if (start !== end) return false;
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
