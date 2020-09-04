function count(array, value) {
  let count = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    if (array[idx] === value) {
      count += 1;
    }
  }

  return count;
}

function areArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let idx = 0; idx < array1.length; idx += 1) {
    let value = array1[idx];
    let count1 = count(array1, value);
    let count2 = count(array2, value);
    
    if (count1 !== count2) {
      return false;
    }
  }

  return true;
}

console.log(areArraysEqual([1, 2, 3], [1, 2, 3]) === true);                  // true
console.log(areArraysEqual([1, 2, 3], [3, 2, 1]) === true);                  // true
console.log(areArraysEqual(['a', 'b', 'c'], ['b', 'c', 'a']) === true);      // true
console.log(areArraysEqual(['1', 2, 3], [1, 2, 3]) === false);                // false
console.log(areArraysEqual([1, 1, 2, 3], [3, 1, 2, 1]) === true);            // true
console.log(areArraysEqual([1, 2, 3, 4], [1, 1, 2, 3]) === false);            // false
console.log(areArraysEqual([1, 1, 2, 2], [4, 2, 3, 1]) === false);            // false
console.log(areArraysEqual([1, 1, 2], [1, 2, 2]) === false);                  // false
console.log(areArraysEqual([1, 1, 1], [1, 1]) === false);                     // false
console.log(areArraysEqual([1, 1], [1, 1]) === true);                        // true
