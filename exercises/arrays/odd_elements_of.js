function oddElementsOf(arr) {
  let oddElements = [];

  for (let idx = 1; idx < arr.length; idx += 2) {
    oddElements.push(arr[idx]);
  }

  return oddElements;
}

// Test
let arr1 = [4, 8, 15, 16, 23, 42];
console.log(oddElementsOf(arr1)); // returns [8, 16, 42]
