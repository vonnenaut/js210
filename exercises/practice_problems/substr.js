/*
Write a function that returns a substring of a string 
based on a starting index and length.

- The start argument is the starting index. If negative, 
treat it as strLength + start where strLength is the 
length of the string. For example, if start is -3, 
treat it as strLength - 3.

- The length argument is the maximum length of the desired 
substring. If length exceeds the number of characters 
available, just use the available characters.

You may use the square brackets ([]) to access a 
character by index (as shown below), and the length 
property to find the string length. However, you may not 
use any other properties or methods from JavaScript's 
built-in String class.

*/
function substr(string, start, length) {
  let substring = '';
  let strLength = string.length;
  let start_idx = start;
  let stop_idx = start + length;

  if (start < 0) {
    start_idx = strLength + start;
    stop_idx = start_idx + length;
  }

  if (length > strLength - start) {
  	length = strLength - start;
  	stop_idx = strLength;
  }
  
  for (let idx = start_idx; idx < stop_idx; idx += 1) {
    substring += string[idx];
  }

  return substring;
}

// Test
let string = 'hello world';

console.log(substr(string, 2, 4) === "llo ");
console.log(substr(string, -3, 2) === "rl");
console.log('\n');

console.log(substr(string, 8, 20) === "rld");  
console.log('\n');

console.log(substr(string, 0, -20) === "");
console.log(substr(string, 0, 0) === "");