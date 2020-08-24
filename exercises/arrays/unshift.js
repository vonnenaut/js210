const unshift = (arr, value) => {
  arr.length = arr.length + 1;
  
  for(let idx = arr.length - 1; idx > 0; idx -= 1) {
    arr[idx] = arr[idx - 1];  
  }

  arr[0] = value;


  return arr.length;
}

let arr = [1, 2];
console.log(unshift(arr, 3) === 3);
console.log(arr); // [3, 1, 2]
