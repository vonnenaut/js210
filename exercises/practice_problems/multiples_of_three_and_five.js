function multiplesOfThreeAndFive(start, end, val1, val2) {
  for (let i = start; i <= end; i++) {
    let output;

    if (i % val1 === 0 && i % val2 === 0) {
      console.log(String(i) + ` is a multiple of both ${val1} and ${val2}!`);
    } else if (i % val1 === 0 || i % val2 === 0) {
      console.log(String(i) + ` is a multiple of ${val1} or ${val2}.`);
    }
  }
}

multiplesOfThreeAndFive(1, 25, 3, 5);
