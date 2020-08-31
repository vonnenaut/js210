function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let last_element = arr[arr.length - 1];
  arr.length = arr.length - 1;

  return last_element;
}

// Test
const array1 = [1, 2, 3];
console.log(pop(array1) === 3);     // 3
console.log(array1);                // [1, 2]
console.log(pop([]));                           // undefined
console.log(pop([1, 2, ['a', 'b', 'c']]));      // ["a", "b", "c"]

function push(arr, ...arrElements) {
  if (arrElements.length === 0) {
    return 0
  }

  let newIdx = arr.length;

  for (let idx = 0; idx < arrElements.length; idx += 1) {
    arr[newIdx] = arrElements[idx];
    newIdx += 1;
  }

  return arr.length;
}

// Test
const array2 = [1, 2, 3];
push(array2, 4, 5, 6);              // 6
console.log(array2);                // [1, 2, 3, 4, 5, 6]
console.log(push([1, 2], ['a', 'b']));          // 3
console.log(push([], 1));                       // 1
console.log(push([]));                          // 0
