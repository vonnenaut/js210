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
  let m = firstString.length;
  let n = secondString.length;
  let num_matches = 0;

  for (let idx = 0; idx <= (m - n); idx += 1) {
    for (let idx2 = idx; idx2 <= (idx + n); idx2 += 1) {
      if (firstString[idx2] === secondString[idx2]) {
        num_matches += 1;
      }
    }
    if (num_matches === n) {
      return idx;
    }
  }

  return -1;
} 

function lastIndexOf(firstString, secondString) {
  // searches for last instance of secondString in firstString, returning its first character index if found, otherwise returning -1

}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1
console.log(indexOf('Blue Whale', 'leB'))
                     // -1

// lastIndexOf('Some strings', 's');                  // 11
// lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
// lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1