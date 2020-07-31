let readlineSync = require('readline-sync');

function getName(prompt) {
    let name = readlineSync.question(prompt);
    return name;
}  

let first_name = getName("What is your first name? ");
let last_name = getName("What is your last name? ");
console.log(`Hello, ${first_name} ${last_name}!`);