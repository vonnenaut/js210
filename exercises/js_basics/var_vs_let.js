var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

for (var i = 0; i < messages.length; i++) {
  setTimeout(function () {
    console.log(messages[i]);
  }, i * 1500);
} // logs 'undefined' three times

//////
var messages = ["Meow!", "I'm a talking cat!", "Callbacks are fun!"];

messages.forEach(function (message, i) {
  setTimeout(function () {
    console.log(message);
  }, i * 1500);
}); // fixes the problem