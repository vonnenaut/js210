function toString(arr) {
  let string = '';

  for (let idx = 0; idx < arr.length; idx += 1) {
    string += String(arr[idx]);
  }  

  return string;
}

let arr = [1, 2, 3];
console.log(toString(arr)); // '123'

arr = ['a', 'b', 'c'];
console.log(toString(arr)); // 'abc'
