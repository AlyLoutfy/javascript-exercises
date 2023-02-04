const convertToCelsius = function(deg) {
  return Math.round(5/9 * (deg-32) * 10) / 10;
};

const convertToFahrenheit = function(deg) {
  return Math.round(((5/9 * deg) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
