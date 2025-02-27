const fibonacci = function(num) {
  if (num == 0 || num == 1) return 1;
  if (num < 0) return "OOPS";

  num = parseInt(num);
  let tempArr = [1,1];
  for (let i = 2; i <= num+1; i++) {
    tempArr[i] = tempArr[i-1] + tempArr[i-2];
  }

  return tempArr[tempArr.length-3];
};

// console.log(fibonacci(4));

// Do not edit below this line
module.exports = fibonacci;
