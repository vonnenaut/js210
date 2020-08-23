function lastInArray(arr) {
  return arr[arr.length - 1];
}

// Test
let arr = [1, 2, 3]; 
console.log(lastInArray(arr) === 3);

arr = ['a', 'b'];
console.log(lastInArray(arr) === 'b');

arr = ['x', 7, 'not really', 'yes'];
console.log(lastInArray(arr) === 'yes');
