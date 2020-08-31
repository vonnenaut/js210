function shift(arr) {
  let outputArr;

  if (arr.length > 0) {
    outputArr = arr.splice(0, 1).pop();  // pop is used to extract the element from a single-element array returned by splice
  }

  return outputArr;
}

// Test
let arr1 = [1, 2, 3];
console.log(shift(arr1));                // 1
console.log(shift([]));                       // undefined
console.log(shift([[1, 2, 3], 4, 5]));        // [1, 2, 3]

function unshift(arr, ...newElements) {
  let newIdx = arr.length;

  for (idx = 0; idx < newElements.length; idx += 1) {
    arr[newIdx] = newElements[idx];
    newIdx += 1;
  }

  return arr.length; 
}


// Test
console.log('\n');
console.log(unshift([1, 2, 3], 5, 6));        // 5
console.log(unshift([1, 2, 3]));              // 3
console.log(unshift([4, 5], [1, 2, 3]));      // 3

// Test both functions
console.log('\n');
const testArray = [1, 2, 3];
console.log(shift(testArray));                // 1
console.log(testArray);                       // [2, 3]
console.log(unshift(testArray, 5));           // 3
console.log(testArray);                       // [5, 2, 3]
