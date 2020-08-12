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

function indexOf(firstrString, secondString) {
  // searches for first instance of secondString in firstString, returning its first character index if found, otherwise returning -1

} 

function lastIndexOf(firstString, secondString) {
  // searches for last instance of secondString in firstString, returning its first character index if found, otherwise returning -1

}

indexOf('Some strings', 's');                      // 5
indexOf('Blue Whale', 'Whale');                    // 5
indexOf('Blue Whale', 'Blute');                    // -1
indexOf('Blue Whale', 'leB');                      // -1

lastIndexOf('Some strings', 's');                  // 11
lastIndexOf('Blue Whale, Killer Whale', 'Whale');  // 19
lastIndexOf('Blue Whale, Killer Whale', 'all');    // -1