// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function afterMidnight(timeStr) {
//   const timeComponents = timeStr.split(':');
//   const hours = parseInt(timeComponents[0], 10);
//   const minutes = parseInt(timeComponents[1], 10);

//   return hours * MINUTES_PER_HOUR + minutes;
// }

// function beforeMidnight(timeStr) {
//   let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
//   if (deltaMinutes === MINUTES_PER_DAY) {
//     deltaMinutes = 0;
//   }

//   return deltaMinutes;
// }

// // Test
// console.log(afterMidnight('00:00') === 0);  // 0
// console.log(beforeMidnight('00:00') === 0); // 0
// console.log(afterMidnight('12:34') === 754);  // 754
// console.log(beforeMidnight('12:34') === 686); // 686

// Rewrite using JavaScript Date object
const MILLISECONDS_PER_MINUTE = 60000;
const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;
const DATE_PART = '1/1/2000';

function afterMidnight(timeStr) {
  const midnight = new Date(`${DATE_PART} 00:00`);
  const currentDateTime = new Date(`${DATE_PART} ${timeStr}`);

  return (currentDateTime.getTime() - midnight.getTime()) / MILLISECONDS_PER_MINUTE;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }

  return deltaMinutes;
}

// Test
console.log(afterMidnight('00:00') === 0);  // 0
console.log(beforeMidnight('00:00') === 0); // 0
console.log(afterMidnight('12:34') === 754);  // 754
console.log(beforeMidnight('12:34') === 686); // 686