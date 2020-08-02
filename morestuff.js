console.log(Math.sqrt(37));
console.log('\n');
//////

function getMax(arr) {
  let copy = arr.slice();
  return copy.sort().pop();
} 

let list = [1, 6, 3, 2];
console.log(getMax(list)); // => 6
console.log(list);
console.log('\n');
/////

function allMatches(string_array, regex) {
  let matches = [];
  
  string_array.forEach(elem => elem.match(regex) && matches.push(elem));
  
  return matches;  
}

// alt form -- if statement without short-hand
function allMatches2(string_array, regex) {
  let matches = [];

  string_array.forEach(elem => {
    if(elem.match(regex)){
      matches.push(elem);
    }
  });

  return matches;
}

// non-arrow form
function allMatches3(string_array, regex) {
  let matches = [];

  string_array.forEach(function (elem) {
    if(elem.match(regex)){
      matches.push(elem);
    }
  });

  return matches;
}


let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

console.log(allMatches(words, /lab/)); // ['laboratory', 'flab', 'elaborate']);
console.log('\n');
console.log(allMatches2(words, /lab/));
console.log('\n');
console.log(allMatches3(words, /lab/));
