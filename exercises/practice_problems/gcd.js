// calculates greatest common denominator of two numbers using Euclid's algorithm

function gcd(num1, num2) {
  let temp;
  
  while (num2 !== 0) {
      temp = num2;
      num2 = num1 % num2;
      num1 = temp;
  }

  return num1;
}

console.log(gcd(48, 18));