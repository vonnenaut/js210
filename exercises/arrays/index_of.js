const indexOf = (arr, value) => {
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx] === value) {
      return idx;
    }
  }

  return -1;
}

arr1 = [1, 2, 3];
console.log(indexOf(arr1, 2) === 1);
console.log(indexOf(arr1, 3) === 2);
console.log(indexOf(arr1, 9) === -1);
