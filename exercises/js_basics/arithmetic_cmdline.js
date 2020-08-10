const readlineSync = require("readline-sync");

console.log("Enter the first number: ");
let num1 = Number(readlineSync.prompt());

let num2 = 0;

while (num2 == 0) {
  console.log("Enter the second number: ");
  num2 = Number(readlineSync.prompt());
  if (num2 == 0) {
    console.log("Can't have division by zero.  Enter a non-zero number.");
  }
}

console.log(`${num1} + ${num2} = ${num1 + num2}`);
console.log(`${num1} - ${num2} = ${num1 - num2}`);
console.log(`${num1} * ${num2} = ${num1 * num2}`);
console.log(`${num1} / ${num2} = ${num1 / num2}`);
console.log(`${num1} % ${num2} = ${num1 % num2}`);
console.log(`${num1} ** ${num2} = ${num1 ** num2}`);
