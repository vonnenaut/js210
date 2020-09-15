// 1.
let today = new Date();
console.log(today);

// 2.
let dayNum = today.getDay();
let string = `Today's day is ${dayNum}.`;
console.log(string);

// 3.
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
string = `Today's day is ${daysOfWeek[dayNum]}.`;
console.log(string);

// 4.
string = `Today's date is ${daysOfWeek[dayNum]}, the ${today.getDate()}th`;
console.log(string);

// 5.
function dateSuffix(date) {
  let suffix = 'th';

  if (date === 1) {
    suffix = 'st';
  } else if (date === 2) {
    suffix = 'nd';
  } else if (date === 3) {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log(dateSuffix(1) === '1st');
console.log(dateSuffix(2) === '2nd');
console.log(dateSuffix(3) === '3rd');
console.log(dateSuffix(4) === '4th');

// 6. 
string = `Today's date is ${daysOfWeek[dayNum]}, ${today.getMonth()} the ${dateSuffix(today.getDate())}`;
console.log(string);

// 7.
let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
string = `Today's date is ${daysOfWeek[dayNum]}, ${months[today.getMonth()]} the ${dateSuffix(today.getDate())}`;
console.log(string);

// 8.
function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  return months[date.getMonth()];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return daysOfWeek[date.getDay()];
}

function formattedDate(date) {
  let month = formattedMonth(date);
  let day = formattedDay(date);
  string = `Today's date is ${day}, ${month} the ${dateSuffix(date.getDate())}`;
  
  console.log(string);
}

formattedDate(today);


