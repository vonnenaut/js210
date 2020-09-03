function incrementProperty(obj, str) {
  let properties =  Object.keys(obj);

  if (properties.includes(str)) {
    obj[str] += 1;
  } else {
    obj[str] = 1;
  }

  return obj[str];
}

// Test
let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie') === 5);   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy') === 1);    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }
