const ftoc = function (celsius) {
  let cTemp = celsius;
  let cToFahr = Math.round((cTemp * 9) / 5 + 32) / 10;
  let message =
    cTemp +
    " celsius grades" +
    " converted into Fahrenheit grades would be equal to " +
    cToFahr +
    " grades.";
  console.log(message);
};
ftoc(20);

const ctof = function (fahrenheit) {
  let fTemp = fahrenheit;
  let fToCels = Math.round(((fTemp - 32) * 5) / 9) / 10;
  let message =
    fTemp +
    " Fahrenheit grades converted into Celsius grades would be equal to " +
    fToCels +
    " grades.";
  console.log(message);
};
ctof(35.2);
