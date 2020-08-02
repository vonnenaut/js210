let foo = {
  a: 'hello',
  b: 'world'
};

let qux = 'hello';

function bar(arg1, arg2) {
  arg1.a = 'hi';
  arg2 = 'hi';
}

bar(foo. qux);

console.log(foo.a);
console.log(qux);
