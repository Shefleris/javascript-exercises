const convertToCelsius = function(fahrenheitDeg) {
  let celsiusDeg = (fahrenheitDeg-32)*5/9;
  return Math.round(celsiusDeg*10)/10;
};

const convertToFahrenheit = function(celsiusDeg) {
  let fahrenheitDeg = (celsiusDeg*9/5+32);
  return Math.round(fahrenheitDeg*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
