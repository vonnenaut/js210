function repeatChar(char, times) {
  output = '';

  while (output.length < times) {
    output += char;
  }

  return output;
}

function logInBox(text) {
  let top_border = "+" + repeatChar('-', text.length + 2) + "+";
  let intermediate_line = "|" + repeatChar(" " , text.length + 2) + "|";
  let middle_text = `| ${text} |`;
  let bottom_border = top_border;

  console.log(top_border);
  console.log(intermediate_line);
  console.log(middle_text);
  console.log(intermediate_line);
  console.log(bottom_border);
}

// Test
logInBox('To boldly go where no one has gone before.');
// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+