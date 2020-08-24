const shift = (arr) => {
  let value = arr[0];
  
  for(let idx = 0; idx < arr.length - 1; idx += 1) {
    arr[idx] = arr[idx + 1];
  }

  arr.length = arr.length - 1;

  return value;
}

arr1 = [1, 2, 3]
console.log(shift(arr1) === 1);
console.log(arr1.length === 2);
