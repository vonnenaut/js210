function endsOf(beginningArr, endingArr) {
  return [beginningArr[0], endingArr[endingArr.length - 1]];
}

// Test
let beginningArr = [4, 8, 15];
let endingArr = [16, 23, 42];
console.log(endsOf(beginningArr, endingArr)); // returns [4, 42]
