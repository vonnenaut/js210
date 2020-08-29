/*
function concat(arr, arg) {
  let concat_arr = [...arr];

  if (Array.isArray(arg)) {
    for (let idx = 0; idx < arr.length; idx += 1) {
      concat_arr.push(arg[idx]);
    }
  } else {
    concat_arr.push(arg);
  }

  return concat_arr;
}

// Test
console.log(concat([1, 2, 3], [4, 5, 6]));          // [1, 2, 3, 4, 5, 6]
console.log(concat([1, 2], 3));                     // [1, 2, 3]
console.log(concat([2, 3], ['two', 'three']));      // [2, 3, "two", "three"]
console.log(concat([2, 3], 'four'));                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
console.log(newArray);                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
console.log(newArray);                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }
*/

// Refactor
function concat(arr, ...arg) {
  let concatArr = [...arr];

  for (let el = 0; el < arg.length; el += 1) {
    currentArg = arg[el];
  
    if (Array.isArray(currentArg) && currentArg.length > 1) {
      for (let idx = 0; idx < arr.length; idx += 1) {
        concatArr.push(currentArg[idx]);
      }
    } else if (Array.isArray(currentArg) && currentArg.length === 1) {
      concatArr.push(currentArg[0]);
    } else {
      concatArr.push(currentArg);
    }
  }

  return concatArr;
}

console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]

