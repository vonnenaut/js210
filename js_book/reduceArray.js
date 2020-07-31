function sumOfSquares(arr) {
  const reducer = (accumulator, value) => accumulator + Math.pow(value, 2);
  return arr.reduce(reducer, 0);
} 

let numbers = [3, 5, 7];
console.log(sumOfSquares(numbers));
