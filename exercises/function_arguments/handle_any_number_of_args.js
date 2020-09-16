function sum() {
  let sum = 0;

  for (let idx = 0; idx < arguments.length; idx += 1) {
    sum += arguments[idx];
  }

  return sum;
}

// Test
console.log(sum(1, 2) === 3);
console.log(sum(1, 1, 1) === 3);
console.log(sum(1, 2, 1, 3, 3) === 10);

// The above method is somewhat hard to read since the arguments aren't made an explicit parameter.  Plus, arguments is array-like, but not really an array.

// A newer way to do the same using a rest parameter, which is more readable, available since ES6:
function logArgs(...args) {
  console.log(args[0]);
  console.log(args[1]);
  console.log(args.length);
}

// Test
console.log('\n');
logArgs(1, 'a', 'free range');

// rest parameters are actually arrays
