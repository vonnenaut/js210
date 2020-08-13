function trimLeft(str) {

}

function trimRight(str) {

}

function trim(str) {
  let length = str.length;

  let trimmed_str = trimLeft(str);
  
  return trimRight(trimmed_str);
}

console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""