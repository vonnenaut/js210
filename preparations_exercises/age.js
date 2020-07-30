let readlineSync = require('readline-sync');
let age = Number(readlineSync.question("How old are you? "));

console.log(`Your are ${age} years old.`);

for (let idx = 10; idx <= 40; idx += 10) {
  console.log(`In ${idx} years, you will be ${age + idx} years old.`);
}
