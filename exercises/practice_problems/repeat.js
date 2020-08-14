const isValidTimes = value => Number.isInteger(value) && value >= 0;


function repeat(str, times) {
  if (!isValidTimes) {
    return undefined;
  } else {
    let output_str = "";
    
    for (let time = 1; time <= times; time += 1) {
      output_str += str;
    }
    console.log(output_str);
  }
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
console.log(repeat('abc', -1));      // undefined
repeat('abc', 0);       // ""
console.log(repeat('abc', 'a'));     // undefined
console.log(repeat('abc', false));   // undefined
console.log(repeat('abc', null));    // undefined
console.log(repeat('abc', '  '));    // undefined