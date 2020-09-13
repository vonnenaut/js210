function randomNumberBetween(min, max) {
  if (min === max) {
    return min;
  } else if (min > max) {
    let temp = min;
    min = max;
    max = temp;
  }

  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Test
console.log(randomNumberBetween(1, 2));
console.log(randomNumberBetween(1, 100));
console.log(randomNumberBetween(100, 50));

