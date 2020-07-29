let readlineSync = require('readline-sync');
let first_name = readlineSync.question("What is your first name? ");
let last_name = readlineSync.question("What is your last name? ");
console.log(`Hello, ${first_name} ${last_name}!`);
