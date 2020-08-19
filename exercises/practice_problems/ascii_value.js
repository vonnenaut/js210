function asciiValue(string) {
  let total = 0;

  for (let idx = 0; idx < string.length; idx += 1) {
    total += string.charCodeAt(idx);
  }

  return total;
}

// Test
console.log(asciiValue('Four score') === 984);         // 984
console.log(asciiValue('Launch School') === 1251);      // 1251
console.log(asciiValue('a') === 97);                  // 97
console.log(asciiValue('') === 0);                   // 0