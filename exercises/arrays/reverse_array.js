function reverse(array) {
  let result = [];

  for(let idx = array.length - 1; idx >= 0; idx -= 1) {
    result.push(array[idx]);
  }

  return result;
}

let arr = [1, 2, 3];
console.log(reverse(arr));
