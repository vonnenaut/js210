function nthElementOf(arr, idx) {
  return arr[idx];
}

// Test
let digits = [4, 8, 15, 16, 23, 42];
console.log(nthElementOf(digits, 3) === 16);
console.log(nthElementOf(digits, 8) === undefined);
console.log(nthElementOf(digits, -1) === undefined);
