function missing(arr) {
  let missingNumbers = [];

  for (let value = arr[0] + 1; value < arr[arr.length - 1]; value += 1) {
    if (arr.includes(value)) {
      continue;
    }
    missingNumbers.push(value);
  }

  return missingNumbers;
}

// Test
let arr1 = [-3, -2, 1, 5];
console.log(missing(arr1));                   // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));           // []
console.log(missing([1, 5]));                 // [2, 3, 4]
console.log(missing([6]));                    // []
