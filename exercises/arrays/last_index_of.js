const lastIndexOf = (arr, value) => {
  for (let idx = arr.length - 1; idx >= 0; idx -= 1) {
    if (arr[idx] === value) {
      return idx;
    }
  }

  return -1;
}

arr1 = [1, 2, 2];
console.log(lastIndexOf(arr1, 2) === 2);
console.log(lastIndexOf(arr1, 7) === -1);

arr1 = [1, 3, 3, 3];
console.log(lastIndexOf(arr1, 3) === 3);

