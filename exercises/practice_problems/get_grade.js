function getAverage(pct1, pct2, pct3) {
  return (pct1 + pct2 + pct3) / 3;
}

function getLetterGrade(percentage) {
  const LETTER_GRADES = {
    90: 'A',
    80: 'B',
    70: 'C',
    60: 'D',
  }
  
  if (percentage < 60) {
    return 'F';
  } else if (percentage > 100) {
    return 'A';
  }

  let tensPlace = percentage - (percentage % 10);

  return LETTER_GRADES[tensPlace];
}

function getGrade(gr1, gr2, gr3) {
  let average = getAverage(gr1, gr2, gr3);

  return getLetterGrade(average);
}

// Test
console.log(getGrade(95, 90, 93) === "A");    // "A"
console.log(getGrade(50, 50, 95) === "D");    // "D"
console.log(getGrade(40, 34, 22) === "F");    // "F"
console.log(getGrade(100, 103, 105) === "A");    // "A"