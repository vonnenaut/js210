function reduceOddLengths(arr) {
  const reducer = (filteredArray, letters) => {
    let length = letters.length; 
    if (length % 2 !== 0) {
      filteredArray.push(length);
    }

    return filteredArray;
  }

  return arr.reduce(reducer, []);
}

/*
function reduceOddLengths(arr) {
  return arr.reduce((filteredArray, letters) => {
    let length = letters.length;
    if (length % 2 === 1) {
      filteredArray.push(length);
    }

    return filteredArray;
  }, []);
}
*/

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(reduceOddLengths(arr)); // => [1, 5, 3]
