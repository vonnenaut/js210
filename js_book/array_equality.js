function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i += 1) {
    if (!Number.isInteger(arr1[i]) || !Number.isInteger(arr2[i])) {
      console.log("Error: invalid input.  Inputs must be 1-dimensional arrays.");
      return;
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

console.log(arraysEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysEqual([1, 2, 3], [4, 5, 6]));
console.log(arraysEqual([1, 2, 3], [1, 2, 3, 4]));
console.log(arraysEqual([1, 2, [3, 4], 5], [1, 2, [3, 4], 5]));
