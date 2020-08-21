function fillAsterisks(line, count) {
  while (line.length < count) {
    line += "*";
  }

  return line;
}

function fillSpaces(line, height) {
  while (line.length < height) {
    line = " " + line;
  }

  return line;
}

function triangle(height) {
  if (height <= 0) {
    return "Error: Height must be a positive number."
  }

  let line = '';
 
  for (let count = 1; count <= height; count += 1) {
    line = fillAsterisks(line, count);
    line = fillSpaces(line, height);
    console.log(line);
    line = '';
  }
}

// Test helper functions
console.log(fillAsterisks('', 3));
console.log(fillSpaces('*', 5));

// Test main function
triangle(3);

triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********