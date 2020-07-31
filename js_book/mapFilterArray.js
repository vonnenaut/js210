function oddLengths(arr) {
  let lengths = arr.map(value => value.length);
  return lengths.filter(length => length % 2 !== 0); 
}

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr));
