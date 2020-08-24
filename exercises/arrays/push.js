/* function push(arr, value) {
  arr[arr.length] = value;
  return arr.length;
}
*/

const push = (arr, value) => {
  arr[arr.length] = value;
  return arr.length;
}

let arr1 = [1, 5, 6]
console.log(push(arr1, 3) === 4); // 4
console.log(arr1); // mutates?
