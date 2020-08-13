/* algorithm for indexOf:
   - Assume that the first string's length is m and the second string's length is n.
  - Iterate from the beginning of the first string and work to the end.

  - During each iteration:
    - Compare the n characters starting at the current position in the first string with the n characters of the second string.
      - If all n characters match, return the index of the current character in the first string
      - Otherwise, continue iteration.

    - The last character we need to check in the first string is the character at index m - n.

  - Return -1 if you cannot find the second string in the first string.

  
  algorithm for lastIndexOf:
  - For the lastIndexOf function, the algorithm is similar. However, for this function we start with the m - nth character in the first string and work backward to index 0.
*/

function indexOf(firstString, secondString) {
  // searches for first instance of secondString in firstString, returning its first character index if found, otherwise returning -1
  let first_length = firstString.length;
  let second_length = secondString.length;
  let num_matches = 0;

  for (let first_idx = 0; first_idx <= (first_length - second_length); first_idx += 1) {
    for (let second_idx = 0; second_idx < secondString.length; second_idx += 1) {
      if (firstString[first_idx + second_idx] === secondString[second_idx]) {
        num_matches += 1;
      } else {
        break;
      }
    }
    
    if (num_matches === second_length) {
      return first_idx;
    }
  }

  return -1;
} 

function lastIndexOf(firstString, secondString) {
  // searches for last instance of secondString in firstString, returning its first character index if found, otherwise returning -1
  let first_length = firstString.length;
  let second_length = secondString.length;
  let num_matches = 0;

  for (let first_idx = first_length - second_length; first_idx >= 0; first_idx -= 1) {
    for (let second_idx = 0; second_idx < secondString.length; second_idx += 1) {
      if (firstString[first_idx + second_idx] === secondString[second_idx]) {
        num_matches += 1;
      } else {
        break;
      }
    }
    
    if (num_matches === second_length) {
      return first_idx;
    }
  }

  return -1;
}

function lastIndexOf2(firstString, secondString) {
  

}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'))
                     // -1

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1