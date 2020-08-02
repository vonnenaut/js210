let myProtoObj = {
  foo: 1,
  bar: 2
};

let myObj = Object.create(myProtoObj);
myObj['qux'] = 3;
console.log(Object.values(myObj));
console.log('\n');

//

Object.keys(myObj).forEach((key) => console.log(key));
console.log('\n');

//

for (let key in myObj) {
  console.log(key);
}
console.log('\n');

//

for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key);
  }
}
