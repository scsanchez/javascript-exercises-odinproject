const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};
const sum = function (array) {
  return array.reduce((sumAll, currentValue) => {
    return sumAll + currentValue;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((sumAll, currentValue) => {
    return sumAll * currentValue;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let sumAllFactorialNumbers = 1;
  for (let i = number; i > 0; i--) {
    sumAllFactorialNumbers *= i;
  }
  return sumAllFactorialNumbers;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
