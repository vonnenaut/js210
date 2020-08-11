const PASSWORD = 'secret';
let tries = 0;

while (tries < 3) {
  let input = prompt('Enter the password: ');
  tries++;

  if (input === PASSWORD) {
    console.log("You have successfully logged in.");
    tries = 0;
    break;
  }
}

if (tries > 2) {
  console.log("You have been denied access.");
}
