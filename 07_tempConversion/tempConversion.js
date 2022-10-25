const ftoc = function(degreesF) {
  // fahrenheit to celsius: x°F = (x-32)*(5/9)°C
  let degreesC = (degreesF - 32) * (5/9);
  return parseFloat(degreesC.toFixed(1));
};

const ctof = function(degreesC) {
  // celsius to fahrenheit: x°C = (x * (9/5) + 32)°F
  let degreesF = (degreesC * (9/5) + 32);
  return Number(degreesF.toFixed(1)); // Number is an easier way to handle this
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
