function logMultiples(number) {
  for (let i = Math.floor(100 / number); i * number >= 0; i--)
  {
    if ((i * number) % 2 != 0) {
      console.log(i * number)
    }
  }
}

logMultiples(17);
logMultiples(21);
