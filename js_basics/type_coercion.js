console.log(Number('1') == 1);
console.log(parseInt('123', 10) == 123);
console.log(parseFloat('123.12', 123.12) == 123);
console.log(String(123) == '123');
123 + ''; // "123"
'' + 123.12 // "123.12"
!!(null);                // false
!!(NaN);                 // false
!!(0);                   // false
!!('');                  // false
!!(false);               // false
!!(undefined);           // false

!!('abc');               // true
!!(123);                 // true
!!('true');              // true
!!('false');             // this is also true! All non-empty strings are truthy in JavaScript

////
/* Practice Problems: Primitive Types and Type Coercion
*/
let x = '13';
let y = 9;
console.log(Number(x) + y);
console.log(x * y);

let npa = 212;
let nxx = 555;
let num = 1212;

console.log(String(npa) + String(nxx) + String(num));
let number = new String(`${npa} - ${nxx} -  ${num}`);
console.log(number);

let bool = true;
let arr = [1, 2, 3];
console.log(typeof bool.toString());
console.log(typeof arr.toString());
