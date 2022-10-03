const palindromes = function (string) {
  let splitString = string.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  let newArray = joinArray
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
  let splitString2 = newArray.split("");
  let reverseArray2 = splitString2.reverse();
  let joinArray2 = reverseArray2.join("");
  return (
    string.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") ==
    joinArray2
  );
};

// Do not edit below this line
module.exports = palindromes;
