function firstNOf(arr, count) {
  let subarray = [];

  for (let idx = 0; idx < count; idx += 1) {
    subarray[idx] = arr[idx];
  }

  return subarray;
}

// Test
let digits = [4, 8, 15, 16, 23, 42];
console.log(firstNOf(digits, 3));    // returns [4, 8, 15]
