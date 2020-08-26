function lastNOf(arr, count) {
  let subarray = [];

  for (let idx = arr.length - 1; idx > ((arr.length - 1) - count); idx -= 1) {
    subarray.unshift(arr[idx]);
  }
 
  return subarray;
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
