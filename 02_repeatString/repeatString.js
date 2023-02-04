const repeatString = function(str, num) {
  if (num < 0) {
    return 'ERROR';
  }
  let finalMsg = "";
  for(let i = 0; i < num; i++) {
    finalMsg += str;
  }
  return finalMsg;
};

// Do not edit below this line
module.exports = repeatString;
