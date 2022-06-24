// Uppercase Check

// Same question as: Are there are lowercase characters? (take negative of that)

// function isUppercase(string) {
//   const matches = string.match(/[a-z]/gi) || [];
//   return matches.every((letter) => letter === letter.toUpperCase());
// }

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

console.log(isUppercase('t')); // false
console.log(isUppercase('T')); // true
console.log(isUppercase('Four Score')); // false
console.log(isUppercase('FOUR SCORE')); // true
console.log(isUppercase('4SCORE!')); // true
console.log(isUppercase('')); // true
