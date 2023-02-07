const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
  let total = 0;
  for (let i = 0; i < a.length; i++) {
    total += a[i];
  }
  return total;
};

const multiply = function(a) {
  let total;
  if(a.length == 0) {
    total = 0;
    return total;
  }

  total = a[0];
  for (let i = 1; i < a.length; i++) {
    total *= a[i];
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0 || a === 1) return 1;
	
  for (let i = a - 1; i >= 1; i--) {
    a = a * i;
  }
  return a;
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
