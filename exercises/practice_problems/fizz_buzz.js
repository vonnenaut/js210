function fizzBuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }    
  }
}

fizzBuzz();

function fizzBuzzConcise() {
  for (let i = 1; i <= 100; i++) {
    let string = '';

    if (i % 3 === 0) { 
      string += 'Fizz';
    }

    if (i % 5 === 0) {
      string += 'Buzz';
    }

    console.log(string || i);
  }
}

fizzBuzzConcise();
