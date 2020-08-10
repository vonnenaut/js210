function getInput() {
  const readlineSync = require("readline-sync");
  console.log("Please enter a phrase: ");
  return readlineSync.prompt();
}

function countChars(string) {
  return string.replace(/ |[^a-zA-Z]/g, '').length;
}

function displayCount(num, phrase) {
  console.log(`There are ${num} characters in "${phrase}"`);
}

function main() {
  let phrase = getInput();
  let numChars = countChars(phrase);
  displayCount(numChars, phrase);
}

main();
