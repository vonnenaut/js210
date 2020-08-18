function shortLongShort(str1, str2) {
  let longerStr = (str1.length > str2.length) ? str1 : str2;
  let shorterStr = (longerStr === str1) ? str2 : str1;

  return shorterStr + longerStr + shorterStr; 
}

console.log(shortLongShort('abc', 'defgh') === "abcdefghabc");    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh') === "fghabcdefgh");    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz') === "xyz");         // "xyz"
