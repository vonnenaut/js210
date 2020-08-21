function split(number) {
  let halves = {};
  let digitChars = String(number).split('');

  halves['leftHalf'] = Number(digitChars.slice(0, digitChars.length / 2).join(''));
  halves['rightHalf'] = Number(digitChars.slice(digitChars.length / 2, digitChars.length).join(''));

  return halves;
}

function checkIfDoubleNumber(num1, num2) {
  return num1 === num2;
}

function twice(number) {
  let halves = split(number);
  let areEqual = checkIfDoubleNumber(halves['leftHalf'], halves['rightHalf']);

  if (areEqual) {
    return number;
  }

  return number * 2;
}

// Test
console.log(twice(37) === 74);          // 74
console.log(twice(44) === 44);          // 44
console.log(twice(334433) === 668866);      // 668866
console.log(twice(444) === 888);         // 888
console.log(twice(107) === 214);         // 214
console.log(twice(103103) === 103103);      // 103103
console.log(twice(3333) === 3333);        // 3333
console.log(twice(7676) === 7676);        // 7676