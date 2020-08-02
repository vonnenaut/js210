function isNotANumber(value) {
  return value !== value;
}

console.log(isNotANumber(NaN)); // => true
console.log(isNotANumber(1)); // => false
console.log(isNotANumber(true)); // => false
console.log(isNotANumber(false)); // => false
console.log(isNotANumber(null)); // => false
console.log(isNotANumber(5678)); // => false
console.log(isNotANumber(3.141592653589793)); // => false
console.log(isNotANumber(NaN)); // => false
