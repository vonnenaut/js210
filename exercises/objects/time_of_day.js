// const MINUTES_PER_HOUR = 60;
// const HOURS_PER_DAY = 24;
// const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

// function timeOfDay(deltaMinutes) {
//   deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
//   if (deltaMinutes < 0) {
//     deltaMinutes = MINUTES_PER_DAY + deltaMinutes;
//   }

//   let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
//   let minutes = deltaMinutes % MINUTES_PER_HOUR;

//   return `${padWithZeroes(hours, 2)}:${padWithZeroes(minutes, 2)}`;
// }

// function padWithZeroes(number, length) {
//   let numberString = String(number);

//   while (numberString.length < length) {
//     numberString = `0${numberString}`;
//   }

//   return numberString;
// }

// reimplementation of the above using JS' Date object
const MILLISECONDS_PER_MINUTE = 60000;

function timeOfDay(deltaMinutes) {
  const midnight = new Date('1/1/2000 00:00');
  const afterMidnight = new Date(midnight.getTime() + deltaMinutes * MILLISECONDS_PER_MINUTE);
  const hours = padWithZeroes(afterMidnight.getHours(), 2);
  const minutes = padWithZeroes(afterMidnight.getMinutes(), 2);

  return `${hours}:${minutes}`;
}

function padWithZeroes(number, length) {
  let numberString = String(number);

  while (numberString.length < length) {
    numberString = `0${numberString}`;
  }

  return numberString;
}

// Test
console.log(timeOfDay(0) === "00:00");  // "00:00"
console.log(timeOfDay(-3) === "23:57"); // "23:57"
console.log(timeOfDay(35) === "00:35"); // "00:35"
console.log(timeOfDay(-1437) === "00:03"); // "00:03"
console.log(timeOfDay(3000) === "02:00"); // "02:00"
console.log(timeOfDay(800) === "13:20"); // "13:20"
console.log(timeOfDay(-4231) === "01:29"); // "01:29"