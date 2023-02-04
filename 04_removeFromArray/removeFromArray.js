const removeFromArray = function(arr, ...toRemove) {

  newArray = [];

  arr.forEach((val) => {
    if (!toRemove.includes(val)) {
      newArray.push(val);
    }
  });
  
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
