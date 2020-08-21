function madlibs() {
  const readlineSync = require("readline-sync");
  
  console.log('Enter a noun: ');
  let noun = readlineSync.prompt();

  console.log('Enter a verb: ');
  let verb = readlineSync.prompt();

  console.log('Enter an adjective: ');
  let adjective = readlineSync.prompt();

  console.log('Enter an adverb: ');
  let adverb = readlineSync.prompt();

  console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}?  That's hilarious!`);
}

madlibs();

// Sample expected output:
// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// console output
// Do you walk your blue dog quickly? That's hilarious!