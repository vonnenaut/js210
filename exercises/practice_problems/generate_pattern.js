// function generatePattern(nStars) {
//   let lastRowString = '';

//   for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
//     lastRowString += String(lineNumber);
//   }

//   width = lastRowString.length;

//   for (let lineNumber= 1; lineNumber <= nStars; lineNumber += 1) {
//     let string = '';

//     for (let digit = 1; digit <= lineNumber; digit += 1) {
//       string += String(digit);
//     }

//     let num_stars = width - string.length;

//     for (let starsCounter = 1; starsCounter <= nStars - num_stars; starsCounter++) {
//       string += '*';
//     }

//     console.log(string);
//   }
// }
function generatePattern(nStars) {
  let lastRowString = '';

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    lastRowString += String(lineNumber);
  }

  let width = lastRowString.length;

  for (let lineNumber = 1; lineNumber <= nStars; lineNumber += 1) {
    let string = '';
    for (let digit = 1; digit <= lineNumber; digit += 1) {
      string += String(digit);
    }

    let numberOfStars = width - string.length;
    for (let count = 1; count <= numberOfStars; count += 1) {
      string += '*';
    }

    console.log(string);
  }
}

// generatePattern(7);
generatePattern(15);
// generatePattern(3);
// generatePattern(9);