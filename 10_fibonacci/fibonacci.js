const fibonacci = function (number) {
  if (number <= 0) {
    return "OOPS";
  }
  let firstNumber = 1;
  let secondNumber = 1;
  let array = [];
  for (let i = 0; i <= number; i++) {
    if (i === 1) {
      array.push(firstNumber);
    } else if (i === 2) {
      array.push(secondNumber);
    } else if (i >= 3) {
      let number = array[i - 3] + array[i - 2];
      array.push(number);
    }
  }
  return array[number - 1];
};

// Do not edit below this line
module.exports = fibonacci;
