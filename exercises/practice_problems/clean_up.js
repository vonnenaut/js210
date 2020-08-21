/*
--- Description ---

Given a string that consists of some words and an 
assortment of non-alphabetic characters, write a 
function that returns that string with all of the 
non-alphabetic characters replaced by spaces. 
If one or more non-alphabetic characters occur in 
a row, you should only have one space in the result 
(i.e., the result string should never have consecutive 
  spaces).


# --- Algorithm ---

iterate through each char of string,
when char.match(/[a-zA-Z]/), copy the char
to a new string.

Otherwise, keep iterating until you find the next 
char.match(/[a-zA-Z]/) and replace all the 
chars you iterated through before that 
since you last encountered a char.match(/[a-zA-Z]/)with one space

*/
function notAtEndOf(string, idx) {
  return (idx + 1) < string.length;
}

function isAlphabetical(string, idx) {
  return string[idx].match(/[a-zA-Z]/);
}

function atEndOf(string, idx) {
  return idx === string.length - 1;
}

function cleanUp(string) {
  let cleanedString = '';

  for(let idx = 0; idx < string.length; idx += 1) {
    if (isAlphabetical(string, idx)) {
      cleanedString += string[idx];
      continue;
    }
     
    if (notAtEndOf(string, idx) && isAlphabetical(string, idx + 1) ||
    atEndOf(string, idx)) {
      cleanedString += " ";
    }
  }

  return cleanedString;
}

// Test
console.log(cleanUp("---what's my +*& line?") === " what s my line ");    
// " what s my line "