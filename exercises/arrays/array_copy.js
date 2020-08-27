/*
let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myOtherArray);

myArray = [1, 2];
console.log(myOtherArray);
*/

/*
In the previous exercise, the value of the reference 
gets copied. For this exercise, only the values of the 
array should be copied, but not the reference. 

Implement two alternative ways of doing this.
*/

// 1
myArray = [1, 2, 3, 4];
myOtherOtherArray = [];

for (let idx = 0; idx < myArray.length; idx += 1) {
  myOtherOtherArray.push(myArray[idx]);
}

myArray.pop()
console.log(myArray);
console.log(myOtherOtherArray);

// 2
myArray = [1, 2, 3];
myOtherOtherOtherArray = myArray.slice();

myArray.pop();
console.log(myArray);
console.log(myOtherOtherOtherArray);
