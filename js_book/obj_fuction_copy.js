function copyObj(obj, keys) {
  let output_obj = {};

  if (keys) {
    keys.forEach((key) => output_obj[key] = obj[key]);

  return output_obj;
  } else {
    return Object.assign(output_obj, obj);
  }
}

let objToCopy = {
  foo: 1,
  bar: 2
};

let newObj = copyObj(objToCopy);

console.log(newObj.foo);  // => 1
console.log(newObj.bar);  // => 2

let newObj2 = copyObj(objToCopy, [ 'foo' ]);
console.log(newObj2.foo);  // => 1
console.log(newObj2.bar);  // => undefined
