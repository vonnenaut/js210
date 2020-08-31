function reverse(input) {
  if (Array.isArray(input)) {
    let outputArr = [];

    for (idx = input.length - 1; idx >= 0; idx -= 1) {
      outputArr.push(input[idx]);
    }
    
    return outputArr;
  } else if (typeof input === 'string') {
    let chars = input.split('');
    let reversedString = '';

    for (idx = chars.length - 1; idx >= 0; idx -=  1) {
      reversedString += chars[idx]; 
    }

    return reversedString;
  } else {
    return "Error! input must be an array or a string.";
  }
}

// Test
console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]
