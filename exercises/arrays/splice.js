const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
}

const splice = (arr, startIdx, number) => {
  let removedValues = [];
  
  for (let idx = startIdx; idx < arr.length; idx += 1) {
    if (idx < startIdx + number) {
      push(removedValues, arr[idx]);
    }

    arr[idx] = arr[idx + number]; 
  }

  arr.length = arr.length - removedValues.length;

  return removedValues;
}

// Test
let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]
