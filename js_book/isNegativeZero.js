function isNegativeZero(value) {
  return 5 / value < 0;
}

console.log(isNegativeZero(0)); // => false
console.log(isNegativeZero(-0)); // => true
