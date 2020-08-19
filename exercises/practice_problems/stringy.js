function stringy(number) {
  if (number <= 0) {
    return '';
  }

  let output = '1';
  
  while (output.length < number) {
    if (output.endsWith('1')) {
      output += '0'
    } else {
      output += '1';
    }
  }

  return output;
}

// Test
console.log(stringy(6) === "101010");    // "101010"
console.log(stringy(9) === "101010101");    // "101010101"
console.log(stringy(4) === "1010");    // "1010"
console.log(stringy(7) === "1010101");    // "1010101"