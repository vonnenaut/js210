function findFibonacciIndexByLength(numberDigits) {
  if (numberDigits === 1) {
    return 1;
  }
  let matchingIndex = 2;
  let num1 = 1;
  let num2 = 1;
  let value = 0;

  while (String(value).length < numberDigits) {
    value = num1 + num2;
    num1 = num2;
    num2 = value;
    matchingIndex += 1;
  }

  return matchingIndex;
}

// Test
console.log(findFibonacciIndexByLength(2) === 7);       // 7
console.log(findFibonacciIndexByLength(10) === 45);      // 45
console.log(findFibonacciIndexByLength(16) === 74);      // 74