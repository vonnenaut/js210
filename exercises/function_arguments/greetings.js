function greetings(name, job) {
  let nameString = '';

  for (let idx = 0; idx < name.length; idx += 1) {
    nameString += name[idx];
    nameString += (idx === name.length - 1) ? '' : ' ';
  }

  let greeting = `Hello, ${nameString}! Nice to have a ${job.title} ${job.occupation} around.`

  console.log(greeting);
}

// Test
greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });
// Hello, John Q Doe! Nice to have a Master Plumber around.

