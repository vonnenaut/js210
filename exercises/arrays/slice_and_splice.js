function slice(array, begin, end) {
  let slice = [];

  if (end > array.length - 1) {
    end = array.length;
  }
  
  for (let idx = begin; idx < end; idx += 1) {
    slice.push(array[idx]);
  }

  return slice;
}

/*
// Test slice
console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]
*/
function replaceElement(array, index, value) {
  array[index] = value;
}

function insertElement(array, insertIndex, newElement) {
  array.length += 1;
  let temp;

  // move existing values over after adding an empty value to end of array
  for (let idx = array.length - 1; idx > insertIndex; idx -= 1) {
    array[idx] = array[idx - 1];
  }

  array[insertIndex] = newElement;
}

// console.log(splice([1, 2, 3], 1, 0, 'a'));               // []
// [1, "a", 2, 3]
function splice(array, start, deleteCount, ...elements) {
  let deletedElements = [];
  let end = start + deleteCount;
  let newEl;

  if (start > array.length) {
    start = array.length;
  }

  if (deleteCount > (array.length - 1) - start) {
    deleteCount = array.length - start;
  }

  if (start + deleteCount > array.length - 1) {
    end = array.length;
  }
  
  for (let idx = start; idx < end; idx += 1) {
    deletedElements.push(array[idx]);
    newEl = elements.shift();

    if (deleteCount > 0) {
      replaceElement(array, idx, newEl);
      deleteCount -= 1;
    } 

    if (deleteCount === 0 && elements.length > 0) {
      insertElement(array, start, newEl);
    }
  }

  return deletedElements;
}

// Test splice
/*
console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []
console.log('\n');
*/

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]
console.log('\n');

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]
console.log('\n');

// Test insertElement
arr1 = [1, 2, 3];
idx = 1;
value = 'a';
insertElement(arr1, idx, value);
console.log(arr1);                                  // [1, 'a', 2, 3]
console.log('\n');

const arr4 = [1, 2, 3];
console.log(splice(arr4, 1, 0));                    // []
console.log(splice(arr4, 1, 0, 'a'));               // []
console.log(arr4);                                  // [1, "a", 2, 3]
console.log('\n');

const arr5 = [1, 2, 3];
console.log(splice(arr5, 0, 0, 'a'));               // []
console.log(arr5);                                  // ["a", 1, 2, 3]
console.log('\n');