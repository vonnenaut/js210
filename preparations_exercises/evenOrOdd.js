function evenOrOdd(arg) {
  if (!Number.isInteger(arg)) {
    console.log('Error: Must enter an integer value!');
    return;
  } else if (arg % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

evenOrOdd(5.3);
evenOrOdd('huh?');
evenOrOdd(1);
evenOrOdd(2);
evenOrOdd(17);
evenOrOdd(22);

/*
if (foo()) {
  return 'bar';
} else {
  return qux();
}
*/

function capAtTen(string) {
  return (string.length > 10 ? string.toUpperCase() : string);
}

console.log(capAtTen('hello world'));
console.log(capAtTen('goodbye'));


function numberRange(num) {
  if (num >= 0 && num <= 50) {
      console.log(`${num} is between 0 and 50`);
  } else if (num >= 51 && num <= 100) {
      console.log(`${num} is between 51 and 100`);
  } else if (num > 100) {
      console.log(`${num} is greater than 100`);
  } else if (num < 0) {
      console.log(`${num} is less than 0`);
  }
}

numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);
