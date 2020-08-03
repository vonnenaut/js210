let apples = 3;
let bananas = '3';

if (apples === bananas) {
  console.log("They are strictly the same.");
} else {
    if (apples == bananas) {
      console.log("They are approximately the same, i.e., same value, different types.");
    } else {
      console.log("Not strictly equal.");
    }
  }
  console.log("They are not the same at all!");

apples = 3;
bananas = 3;
let areEqual = (apples === bananas);
console.log(areEqual);

apples = 3;
bananas = undefined;
let eitherOr = (apples || bananas);
console.log(eitherOr);

bananas = 1;
eitherOr = (apples || bananas);
console.log(eitherOr);
eitherOr = (bananas || apples);
console.log(eitherOr);

let lastName = 'Smith';

familyMessage = (lastName == 'Smith') ? "You\'re part of the family!" : "You\'re not family."
console.log(familyMessage);
