const caesar = function (message, possition) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  var text = message.toLowerCase();

  var crypted = text.indexOf("a");
  var cryptedOne = crypted + possition;
  var valueAtIndex1 = alphabet[cryptedOne];
  console.log(message);
  console.log(crypted);
  console.log(cryptedOne);
  console.log(valueAtIndex1);
  return valueAtIndex1.toUpperCase();
};

// Do not edit below this line
module.exports = caesar;
