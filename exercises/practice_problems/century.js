/*
--- Description ---
Write a function that takes a year as input and returns 
the century. The return value should be a string that 
begins with the century number, and ends with 
'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01. So, the years 
1901 - 2000 comprise the 20th century.

--- Algorithm ---
calculate the century number as a string
find and append the correct character pair for that century number
return the string

*/
function getCenturyNumber(year) {
  return Math.floor(year / 100) + ((year % 100 === 0) ? 0 : 1);
}

function getEnding(century) {
  if ([11, 12, 13].includes(century % 100)) {
    return 'th';
  }

  let onesPlace = century % 10;

  switch (onesPlace) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
}

function century(year) {
  let centuryNumber = getCenturyNumber(year);

  return String(centuryNumber) + getEnding(centuryNumber);
}

// Test
console.log(century(2000) === "20th");        // "20th"
console.log(century(2001) === "21st");        // "21st"
console.log(century(1965) === "20th");        // "20th"
console.log(century(256) === "3rd");         // "3rd"
console.log(century(5) === "1st");           // "1st"
console.log(century(10103) === "102nd");       // "102nd"
console.log(century(1052) === "11th");        // "11th"
console.log(century(1127) === "12th");        // "12th"
console.log(century(11201) === "113th");       // "113th"