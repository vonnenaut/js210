/*
Similar to substr.js

- If both start and end are positive integers, start is 
less than end, and both are within the boundary of the 
string, return the substring from the start index 
(inclusive), to the end index (NOT inclusive).

- If the value of start is greater than end, swap the 
values of the two, then return the substring as 
described above.

- If start is equal to end, return an empty string.

- If end is omitted, the end variable inside the function 
isundefined. Return the substring starting at position 
start up through (and including) the end of the string.

- If either start or end is less than 0 or NaN, treat 
it as 0.

- If either start or end is greater than the length of 
the string, treat it as equal to the string length.
*/
function isPositive(number) {
  return number >= 0;
}

function isLessThan(num1, num2) {
  return num1 < num2;
}

function areWithinBounds(num1, num2, string) {
  let length = string.length;
  
  return (num1 >= 0 && num1 < length) && (num2 >= 0 && num2 <= length)
}

function meetsBaseRequirements(string, start, end) {
  return isPositive(start) && isPositive(end) && isLessThan(start, end) && areWithinBounds(start, end, string)
}

function isGreaterThan(start, end) {
  return start > end;
}

function substring(string, start, end) {
  let substr = '';
  let length = string.length;

  if (start > length) {
  	start = length;
  } else if (start < 0 || isNaN(start)) {
  	start = 0;
  } 

  if (end === undefined || end > length) {
  	end = length;
  } else if (end < 0 || isNaN(end)) {
    end = 0;
  }

  if (start === end) {
  	return "";
  } else if (isGreaterThan(start, end)) {
  	return substring(string, end, start);
  } else if (meetsBaseRequirements(string, start, end)) {
    for (let idx = start; idx < end; idx += 1) {
      substr += string[idx];
    }

    return substr;
  }
}

// Test
let string = 'hello world';

console.log(substring(string, 2, 4) === "ll");    // "ll"
console.log(substring(string, 4, 2) === "ll");    // "ll"
console.log(substring(string, 0, -1) === "");   // ""
console.log(substring(string, 2) === "llo world");       // "llo world"
console.log(substring(string, 'a') === "hello world");     // "hello world"
console.log(substring(string, 8, 20) === "rld");   // "rld"