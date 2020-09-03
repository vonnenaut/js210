function objectHasProperty(obj, str) {
  let properties = Object.keys(obj);

  return properties.indexOf(str) !== -1;
}

// Test
let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog') === true);       // true
console.log(objectHasProperty(pets, 'lizard') === false);    // false
console.log(objectHasProperty(pets, 'mice') === true);      // true
