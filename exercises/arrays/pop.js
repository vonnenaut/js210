const pop = (arr) => {
  let val = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return val;
}

arr1 = [1, 2];
console.log(pop(arr1) === 2);
console.log(arr1.length === 1);
