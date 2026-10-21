function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function celciusToFahrenheit(celc) {
  return (celc * 9) / 5 + 32;
}

module.exports = { generateRandomNumber, celciusToFahrenheit };
