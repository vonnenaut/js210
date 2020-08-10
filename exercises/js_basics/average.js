function sum(array) {
  let total = 0;

  for(let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function average(array) {
  return sum(array) / array.length;
}

console.log(average([2, 2, 5, 4, 8]));

temperatures = [48.3, 55.1, 62.0, 28.9, 32.7];
console.log(average(temperatures));
