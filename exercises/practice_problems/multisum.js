function getMultiples(number) {
  let multiples = [];

  for (let num = 1; num <= number; num += 1) {
    if (num % 3 === 0 || num % 5 === 0) {
      multiples.push(num);
    }
  }

  return multiples;
}

function sum(array) {
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    sum += array[idx];  
  }

  return sum;
}

function multisum(number) {
  let multiples = getMultiples(number);
  return sum(multiples);
}

// Test
console.log(multisum(3) === 3);       // 3
console.log(multisum(5) === 8);       // 8
console.log(multisum(10) === 33);      // 33
console.log(multisum(1000) === 234168);    // 234168