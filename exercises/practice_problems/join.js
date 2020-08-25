const join = (arr, separator) => {
  let newString = '';

  for (let idx = 0; idx < arr.length - 1; idx += 1) {
    newString = newString + String(arr[idx]) + separator;
  }

  return newString + arr[arr.length - 1];
}

let arr1 = ['bri', 'tru', 'wha'];
let str1 = 'ck ';
console.log(join(arr1, str1));  // // 'brick truck wha'

arr1 = [1, 2, 3];
str1 = ' and ';
console.log(join(arr1, str1));  // '1 and 2 and 3'
