function isPrime(number) {
  if (number <= 1 || (number > 2 && number % 2 === 0)) {
    return false;
  }

  let divisor = 3;

  while (divisor < number) {
    if (number % divisor === 0) {
      return false;
    }

    divisor += 2;
  }

  return true;
}

function getPossiblePairs(sum) {
  let pairs = [];
  num1 = sum - 2;
  num2 = 2;
  
  while (num1 >= Math.floor(sum / 2)) {
    pairs.push(([num1, num2].sort()));
    num1 -= 1;
    num2 += 1;
  }

  return pairs;
}

function getPrimes(pairs_array) {
  let primes = [];
  
  pairs_array.forEach(function (pair) {
    if (isPrime(pair[0]) && isPrime(pair[1])) {
      primes.push(pair);
    }
  });

  return primes;
}

function checkGoldbach(expectedSum) {
  if (expectedSum % 2 !== 0 || expectedSum < 4) {
    console.log(null);
    return;
  }

  let possible_pairs = getPossiblePairs(expectedSum);
  console.log(getPrimes(possible_pairs));
}

// Test isPrime
// console.log(isPrime(2) === true);
// console.log(isPrime(4) === false);
// console.log(isPrime(5) ===true);

// Test getPossiblePairs
// console.log(getPossiblePairs(5));
// console.log(getPossiblePairs(10));

// Test getPrimes
// console.log(getPrimes(getPossiblePairs(10)));

// Test main program
console.log(checkGoldbach(3)); // null
console.log(checkGoldbach(4)); // [2, 2]
console.log(checkGoldbach(12)); // [5, 7]
console.log(checkGoldbach(100)); // [3, 97] ... [47, 53]