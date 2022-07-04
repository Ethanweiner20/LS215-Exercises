// Rotation Part 3

const { rotateRightmostDigits } = require('./rotation_2');

function maxRotation(number) {
  let rotated = number;

  for (let numDigits = String(number).length; numDigits >= 2; numDigits--) {
    rotated = rotateRightmostDigits(rotated, numDigits);
  }

  return rotated;
}

console.log(maxRotation(735291)); // 321579
console.log(maxRotation(3)); // 3
console.log(maxRotation(35)); // 53
console.log(maxRotation(105)); // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146)); // 7321609845
