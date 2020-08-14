function splitString(str, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter");
    return;
  }

  let tempStr = '';

  for (let idx = 0; idx < str.length; idx += 1) {
    if (delimiter === '') {
      console.log(str[idx]);
    } else if (str[idx] === delimiter) {
      console.log(tempStr);
      tempStr = '';
    } else {
      tempStr += str[idx];
    }
  }

  if (tempStr.length > 0) {
    console.log(tempStr);
  }
}

// PEDAC
/* Algorithm

- test for and handle the case where no delimiter is provided
- iterate through the chars and check whether each is a delimiter
- if not, incrementally build a temp_str until you find a delimiter
- each time you find a delimiter, log temp_str and then clear temp_str
- if you reach the end of the str without finding another delimiter, log temp_str if it isn't empty
*/

/* Problem, Examples:

Write a function that takes two arguments:

1. a string to be split
2. a delimiter character

The function logs the split strings to the console, as shown below:
*/
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world
console.log('\n');

console.log(splitString('hello'));
// logs:
// ERROR: No delimiter
console.log('\n');

console.log(splitString('hello', ''));
// logs:
// h
// e
// l
// l
// o
console.log('\n');

console.log(splitString('hello', ';'));
// logs:
// hello
console.log('\n');

console.log(splitString(';hello;', ';'));
// logs:
//  (this is a blank line)
// hello

// Test