const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let totalSum = 0;
  for (let num of array) {
    totalSum += num;
  }
  return totalSum;
};

const multiply = function(array) {
  let answer = 1;
  for (let num of array) {
    answer *= num;
  }
  return answer;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) return 1;
	let answer = a;
  while (a > 1) {
    answer *= a - 1;
    a--;
  }
  return answer;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
