// Rotation 2

const { rotateArray } = require('./rotation_1');

function rotateRightmostDigits(number, n) {
  if (n === 0) return number;

  const numberString = String(number);
  const firstDigits = numberString.slice(0, -n);
  const lastDigits = numberString.slice(-n);
  const newString = firstDigits + rotateString(lastDigits);

  return parseInt(newString, 10);
}

function rotateString(string) {
  return rotateArray(string.split('')).join('');
}

console.log(rotateRightmostDigits(735291, 1)); // 735291
console.log(rotateRightmostDigits(735291, 2)); // 735219
console.log(rotateRightmostDigits(735291, 3)); // 735912
console.log(rotateRightmostDigits(735291, 4)); // 732915
console.log(rotateRightmostDigits(735291, 5)); // 752913
console.log(rotateRightmostDigits(735291, 6)); // 352917

// Edge Cases

console.log(rotateRightmostDigits(5, 1)); // 5
console.log(rotateRightmostDigits(5, 2)); // 5
console.log(rotateRightmostDigits(15, 0)); // 15

module.exports = { rotateRightmostDigits };
