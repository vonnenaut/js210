function repeatedCharacters(str) {
  let counts = {};
  let letters = str.toLowerCase().split('');

  for (let idx = 0; idx < str.length; idx += 1) {
    let letter = letters[idx];
    (Object.keys(counts).includes(letter)) ? counts[letter] += 1 : counts[letter] = 1;
  }

  // this arrow function filters out any letters that have a count of less than 2 
  Object.filter = (obj, condition) =>
    Object.keys(obj)
      .filter( key => condition(obj[key]) )
      .reduce( (res, key) => (res[key] = obj[key], res), {} );

  return Object.filter(counts, count => count > 1); 
}

// Test
console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }
