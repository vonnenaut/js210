/*
Rot13 ("rotate by 13 places") is a letter-substitution
 cipher that translates a String into a new String.
 
For each character in the original String:

- If the character is a letter in the modern English 
alphabet, change it to the character 13 positions 
later in the alphabet. Thus, a becomes n. If you reach 
the end of the alphabet, return to the beginning. 
Thus, o becomes b.

- Letter transformations preserve case. A becomes N 
while a becomes n.

- Don't modify characters that are not letters.

Write a Function, rot13, that takes a String and 
returns that String transformed by the rot13 cipher.
*/
function processCharacter(char, charCode) {
  let LOWERCASE_RANGE_START = 'a'.charCodeAt();
  let LOWERCASE_RANGE_END = 'z'.charCodeAt();
  let UPPERCASE_RANGE_START = 'A'.charCodeAt();
  let UPPERCASE_RANGE_END = 'Z'.charCodeAt();
  let ALPHABET_LENGTH = 26;

  let newChar = '';

  if (char.match(/[A-Z]/)) {
    if (charCode > UPPERCASE_RANGE_END) {
      charCode -= ALPHABET_LENGTH;
    }
    newChar = String.fromCharCode(charCode);
  } else if (char.match(/[a-z]/)) {
    if (charCode > LOWERCASE_RANGE_END) {
      charCode -= ALPHABET_LENGTH;
    }
    newChar = String.fromCharCode(charCode);
  } else {
    newChar = char;
  }

  return newChar;
}

function rot13(str) {
  const LETTER_OFFSET = 13;
  let outputStr = '';
  let charCode;
  let newChar;

  for (let idx = 0; idx < str.length; idx += 1) {
    charCode = str.charCodeAt(idx) + LETTER_OFFSET;
    newChar = processCharacter(str[idx], charCode);
    outputStr += newChar;
  }

  return outputStr;
}

let str = 'Teachers open the door, but you must enter by yourself.';
console.log(`String:\n ${str}`);
let cypher = rot13(str);
console.log(`\nCypher:\n ${cypher}`);
let oldStr = rot13(cypher);
console.log(`\nCypher reversed:\n ${oldStr}`);
