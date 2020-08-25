const concat = (arr1, arr2) => {
  let concat_arr = [];
  let con_idx = arr1.length;

  for (let idx = 0; idx < con_idx; idx += 1) {
    concat_arr[idx] = arr1[idx];
  }

  for (let idx = 0; idx < arr2.length; idx += 1) {
    concat_arr[con_idx] = arr2[idx];
    con_idx += 1;
  }

  return concat_arr;
}

arr1 = [1, 2, 3];
arr2 = [4, 5, 6];
console.log(concat(arr1, arr2));       // [ 1, 2, 3, 4, 5, 6 ]
console.log(arr1);
console.log(arr2);
