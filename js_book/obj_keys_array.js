let obj = {
  b: 2,
  a: 1,
  c: 3,
};


let keys = Object.keys(obj).map((key) => key.toUpperCase());
console.log(keys);
console.log(obj);
console.log('\n');

//
let keys2 = []
Object.keys(obj).forEach(function(key) {
  keys2.push(key.toUpperCase());
});
console.log(keys2);
console.log(obj);
console.log('\n');

//
let keys3 = []
Object.keys(obj).forEach((key) => 
  keys3.push(key.toUpperCase()));
console.log(keys3);
console.log(obj);
