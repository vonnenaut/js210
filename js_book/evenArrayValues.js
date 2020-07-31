/*
function evenArrayValues(arr) {
  evenNums = arr.filter(value => value % 2 === 0);

  evenNums.forEach(el => console.log(el));
}

evenArrayValues([1, 2, 3, 4]);
evenArrayValues([2, 4, 5, 8]);
evenArrayValues([3, 5, 7, 9]);
evenArrayValues([7, 8, 9, 10]);
*/

/*
function evenArrayValues2(arr) {
  arr.forEach(function(subArray) {
    subArray.forEach(function(value) {
      if (value % 2 === 0) {
        console.log(value);
      }
    });
  });
}
*/

arr = [[1, 2, 3, 4], [2, 4, 5, 8]];

for (let i = 0; i < arr.length; i += 1) {
  for (let j = 0; j < arr[i].length; j += 1) {
    let value = arr[i][j];
    if (value % 2 === 0) {
      console.log(value);
    }
  }
}