function copyProperties(obj1, obj2) {
  let numCopied = 0;

  for (let prop in obj1) {
    obj2[prop] = obj1[prop];
    numCopied += 1;
  }

  return numCopied;
}

// Test
let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }
