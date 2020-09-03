function wordCount(str) {
  let counts = {};
  let words = str.split(' ');

  for (let idx in words) {
    let value = words[idx];

    if (Object.keys(counts).includes(value)) {
      counts[value] += 1;
    } else {
      counts[value] = 1;
    }
  }

  return counts;     
}

// Test
console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }
