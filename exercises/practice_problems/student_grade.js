function getScores(number) {
  let scores = [];

  for (score_num = 1; score_num <= number; score_num++) {
    let input = prompt(`Enter score ${score_num}: `);
    scores.push(Number(input));
  }

  return scores;
}

function getAverageScore(scores_array) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sum = scores_array.reduce(reducer);

  return (sum / scores_array.length);
}

function getLetterGrade(score) {
  let grade = 'F';

  if (score >= 90) {
    grade = 'A';
  } else if (score >= 70) {
    grade = 'B';
  } else if (score >= 50) {
    grade = 'C';
  }

  return grade;
}

let number = prompt("How many scores do you want to enter? ");
let scores = getScores(number);
let averageScore = getAverageScore(scores);
let grade = getLetterGrade(averageScore);
console.log(`Based on the average of your ${number} scores, your letter grade is ${grade}.`);