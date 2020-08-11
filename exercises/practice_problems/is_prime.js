function isPrime(number) {
  if (number <= 1 || number % 2 === 0 && number > 2) {
    return false;
  }

  divisors = []  

  for (let divisor = 3; divisor <= number / 2; divisor += 2) {
    if (number % divisor === 0) {
      divisors.push(divisor);
    } 
  }

  return divisors.length === 0;
}

console.log(isPrime(1) === false);
console.log(isPrime(2) === true);
console.log(isPrime(3) === true);
console.log(isPrime(43) === true);
console.log(isPrime(55) === false);
console.log(isPrime(0) === false);
