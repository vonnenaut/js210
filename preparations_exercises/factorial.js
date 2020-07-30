function times(num1, num2) {
  let result = num1 * num2;
  console.log(result);
  return result;
}

function factorial(num) {
  if (num == 1)
    return times(1, 1);
  let result = 1;
  let count = num;

  while (count - 1 >= 1) {
    result = times(result, count);
    count -= 1;
  }

  return result;
}

factorial(1);
// factorial(2);
// factorial(3);
// factorial(4);
// factorial(5);

function recursive_factorial(num) {
  if (num === 1)
    return num;

  return num * factorial(num - 1);
}

console.log(recursive_factorial(5));
