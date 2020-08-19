/*
Write a function that takes a string argument, and returns a new string 
that contains the value of the original string with all consecutive 
duplicate characters collapsed into a single character.

Algorithm
get length of string

create a boolean named copy and set it to true
iterate through string, storing each letter read as last_letter
if the next letter read, current_letter, is equal to the last, set copy = false
once you reach a current_letter != last_letter, set copy = true
a conditional will copy each letter to the output if copy === true

*/
function setCopyState(current, previous) {
  if (current === previous) {
    return false;
  } else {
    return true;
  }
}

function crunch(string) {
  let output_string = '';
  let copy = true;

  for (let idx = 0; idx < string.length; idx += 1) {
    let last_letter = string[idx];
    let current_letter = string[idx + 1];
    
    copy = setCopyState(current_letter, last_letter)

    if (copy) { 
      output_string += last_letter
    }
  }

  return output_string;
}

// try using a regular expression


// Total
console.log(crunch('ddaaiillyy ddoouubbllee') === "daily double");    // "daily double"
console.log(crunch('4444abcabccba') === "4abcabcba");              // "4abcabcba"
console.log(crunch('ggggggggggggggg') === "g");            // "g"
console.log(crunch('a') === "a");                          // "a"
console.log(crunch('') === "");                           // ""