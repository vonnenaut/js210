function mirroredArray(arr) {
  let mirrored_arr = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    mirrored_arr.push(arr[idx]);
  }

  for (let idx = arr.length - 1; idx > -1; idx -= 1) {
    mirrored_arr.push(arr[idx]); 
  }

  return mirrored_arr;
}

function mirroredArray(arr) {
  return arr.concat(arr.slice().reverse());
}

let arr1 = [1, 2, 3];
console.log(mirroredArray(arr1)); // [1, 2, 3, 3, 2, 1]
