const slice = (arr, start_idx, end_idx) => {
  let subarr = [];
  let sub_idx = 0;

  for (let idx = start_idx; idx < end_idx; idx += 1) {
    subarr[sub_idx] = arr[idx];
    sub_idx += 1;
  }

  return subarr;
}


// Test
console.log(slice([1, 2, 3, 4, 5], 0, 2));                      // [ 1, 2 ]
console.log(slice(['a', 'b', 'c', 'd', 'e', 'f', 'g'], 1, 3));  // [ 'b', 'c' ]
