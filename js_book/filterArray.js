function filterArray(arr) {
  console.log(arr.filter(value => Number.isInteger(value)));

}

filterArray([1, 'a', '1', 3, NaN, 3.14159, -4, null, false]);
