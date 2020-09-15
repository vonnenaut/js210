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

// 9.
console.log(today.getFullYear());
console.log(today.getYear());

// 10.
console.log(today.getTime());

// 11.
let tomorrow = new Date(today.getTime());
tomorrow.setDate(today.getDate() + 1);
formattedDate(tomorrow);

// 12.
let nextWeek = new Date(today.getTime());
console.log(nextWeek === today);

// 13.
console.log(nextWeek.toDateString() === today.toDateString());

// 14.
function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (String(hours).length < 2) {
    hours = '0' + String(hours);
  }

  return `${hours}:${minutes}`; 
}

console.log('\n');
console.log(formatTime(today));
console.log(formatTime(new Date(2013, 2, 1, 1, 10)));
