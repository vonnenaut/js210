function logOddNumbers(num) {
  if (num <= 0) {
    return "Error: input must be a positive integer."
  }

  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      continue;
    }

    console.log(i);
  }
}

logOddNumbers(19);
