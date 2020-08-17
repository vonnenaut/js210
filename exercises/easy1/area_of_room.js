/*
Build a program that asks the user to enter the length and 
width of a room in meters, and then logs the area of the 
room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. 
Use the readlineSync.prompt method to collect user input.

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
*/
const readlineSync = require("readline-sync");
const METERS_TO_FEET = 10.7639;

function getLength() {
  console.log('Enter the length of the room in meters: ');
  return Number(readlineSync.prompt());
}

function getWidth() {
  console.log('Enter the width of the room in meters: ');
  return Number(readlineSync.prompt());
}

function getAreaFeet(area_meters) {
  return area_meters * METERS_TO_FEET;
}

function areaOfRoom() {
  let length = getLength();
  let width = getWidth();
  let area_meters = length * width;
  let area_feet = getAreaFeet(area_meters);

  console.log(`The area of the room is ${area_meters} square meters (${area_feet} square feet).`);
}

areaOfRoom();
