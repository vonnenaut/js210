function matrixSums(arr) {
  let sums_arr = [];

  for (let idxI = 0; idxI < arr.length; idxI += 1) {
    let sum = 0;
    for (let idxJ = 0; idxJ < arr[idxI].length; idxJ += 1) {
      sum += arr[idxI][idxJ];
    }
    sums_arr.push(sum);
  }

  return sums_arr; 
}

// Test
let arr1 = [[2, 8, 5], [12, 48, 0], [12]];
console.log(matrixSums(arr1));  // returns [15, 60, 12]
