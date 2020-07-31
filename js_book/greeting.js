let greetingMessage = 'Good morning!';

function greetPeople() {
  console.log(greetingMessage);
}

function changeGreetingMessage(newMessage) {
  greetingMessage = newMessage;
}

greetPeople();
changeGreetingMessage('Good evening!');
greetPeople();

function greetPeople2() {
  let greetingMessage2 = 'Good morning';
  console.log(greetingMessage2);
}

greetPeople2();
console.log(greetingMessage2);
