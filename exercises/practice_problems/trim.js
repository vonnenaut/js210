function trimLeft(str) {
  let newStr = '';
  let copyMode = false;

  for (let idx = 0; idx < str.length; idx += 1) {
    if (str[idx] === ' ' && !copyMode) {
      continue;
    } else if (str[idx] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newStr += str[idx]
    }
  }

  return newStr;
}

function trimRight(str) {
  let newStr = '';
  let copyMode = false;

  for (let idx = str.length - 1; idx >= 0; idx -= 1) {
    if (str[idx] === ' ' && !copyMode) {
      continue;
    } else if (str[idx] !== ' ') {
      copyMode = true;
    }

    if (copyMode) {
      newStr = str[idx] + newStr;
    }
  }

  return newStr;
}

function trim(str) {
  let leftTrimmedStr = trimLeft(str);
  
  return trimRight(leftTrimmedStr);
}

// Test trimLeft
console.log(trimLeft('  aaab') === 'aaab');
console.log(trimLeft(' aa a b  ') === 'aa a b  ');
console.log(trimLeft('aa   ab   ') === 'aa   ab   ');
console.log('\n');

// Test trimRight
console.log(trimRight('  aaab') === '  aaab');
console.log(trimRight(' aa a b  ') === ' aa a b');
console.log(trimRight('aa   ab   ') === 'aa   ab');
console.log('\n');

// Test trim
console.log(trim('  abc  ') === 'abc');
console.log(trim('abc   ' === 'abc'));
console.log(trim(' ab c') === 'ab c');
console.log(trim(' a b  c') === 'a b  c');
console.log(trim('      ') === '');
console.log(trim('') === '');
console.log('\n');