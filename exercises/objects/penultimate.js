function penultimate(string) {
  let wordsArray = string.split(' ');
  let secondToLastIdx = wordsArray.length - 2;
  return wordsArray[secondToLastIdx];
}

console.log(penultimate('last word') === 'last');  // expected: "last"
console.log(penultimate('Launch School is great!') === 'is'); // expected: "is"
