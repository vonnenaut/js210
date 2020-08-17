/*
Write a function that takes two strings as arguments, 
determines the longer of the two strings, and then 
returns the result of concatenating the shorter string, 
the longer string, and the shorter string once again. 
You may assume that the strings are of different lengths.
*/
function shortLongShort(str1, str2) {
  let longerStr = (str1.length > str2.length) ? str1 : str2;
  let shorterStr = (longerStr === str1) ? str2 : str1;

  return shorterStr + longerStr + shorterStr;
}

let str1 = 'abc';
let str2 = 'defgh';
shortLongShort(str1, str2);

str1 = 'abcde';
str2 = 'fgh';
shortLongShort(str1, str2);

str1 = '';
str2 = 'xyz';
shortLongShort(str1, str2);
