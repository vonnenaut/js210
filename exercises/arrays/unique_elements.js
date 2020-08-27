function uniqueElements(arr) {
  let uniqueElements = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (uniqueElements.includes(arr[idx])) {
      continue;
    } 
    uniqueElements.push(arr[idx]);
  }

  return uniqueElements;
}

// Test
let arr1 = [1, 2, 4, 3, 4, 1, 5, 4];
console.log(uniqueElements(arr1)); // returns [1, 2, 4, 3, 5]
