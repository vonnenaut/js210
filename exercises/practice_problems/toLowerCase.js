/*
Write a function that returns a string converted to lowercase.

To convert a single uppercase character to a lowercase character, 
get its ASCII numeric representation from the ASCII table, add 32 to that number, 
then convert the number back to a character using the same ASCII table. You can 
use the String.fromCharCode and the String.charCodeAt methods for these operations. 

For example:

let string = 'A';
let asciiNumeric = string.charCodeAt(0);         // 65
let asciiNumeric += 32;
string = String.fromCharCode(asciiNumeric);  // "a", converted to lowercase


Algorithm:
- instantiate a var output_string
- iterate through each char of string
- get the char's UTF-16 code value, code
- add 32 to it
- convert it back to a char w/.fromCharCode
- append the new char to output_string
- after the loop, return output_string
*/

function toLowerCase(string) {
  const CONVERSION_OFFSET = 32;
  let outputString = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (string[idx].match(/[A-Z]/)) {
      let charCode = string.charCodeAt(idx) + CONVERSION_OFFSET;
      let newChar = String.fromCharCode(charCode);
      outputString += newChar;
    } else {
      outputString += string[idx]
    }
  }

  return outputString;
}

// Test
console.log(toLowerCase('ALPHABET') === "alphabet");
console.log(toLowerCase('123') === "123");
console.log(toLowerCase('abcDEF') === "abcdef");