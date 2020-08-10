let num1 = prompt("Enter the first number: ");
let num2 = 0;

num2 = prompt("Enter the second number: ");
 
while (num2 == 0) {
  num2 = prompt("Can't have division by zero.  Enter a non-zero number: ");
}

alert(`${num1} + ${num2} = ${num1 + num2}\n
${num1} - ${num2} = ${num1 - num2}\n
${num1} * ${num2} = ${num1 * num2}\n
${num1} / ${num2} = ${num1 / num2}\n
${num1} % ${num2} = ${num1 % num2}\n
${num1} ** ${num2} = ${num1 ** num2}`);
