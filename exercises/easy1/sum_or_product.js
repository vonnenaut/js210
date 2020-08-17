function getResult(value, operation) {
  let result;

  if (operation === 's') {
    result = 0;
    
    for (let idx = 1; idx <= value; idx += 1) {
      result += idx;
    }
  } else if (operation === 'p') {
    result = 1;
    
    for (let idx = 2; idx <= value; idx += 1) {
      result *= idx;
    }
  } else {
    console.log('Oops. Unknown operation.');
    process.exit();
  }

  return result; 
}

function printResult(operation, value, result) {
  let op_word = (operation === 's') ? 'sum' : 'product';
  console.log(`\nThe ${op_word} of the integers between 1 and ${value} is ${result}`);
}

function sumOrProduct() {
  const readlineSync = require("readline-sync");

  console.log("Please enter an integer greater than 0: ");
  let value = readlineSync.prompt();
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = readlineSync.prompt();
  let result  = getResult(value, operation);
  printResult(operation, value, result);
}

sumOrProduct();
