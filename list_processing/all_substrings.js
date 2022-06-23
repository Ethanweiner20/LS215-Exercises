// All Substrings

function substrings(string) {
  return string
    .split('')
    .flatMap((_, index) => leadingSubstrings(string.substring(index)));
}

function leadingSubstrings(string) {
  return string.split('').map((_, index) => string.substring(0, index + 1));
}

console.log(substrings('abcde'));

exports.substrings = substrings;

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
//   "b", "bc", "bcd", "bcde",
//   "c", "cd", "cde",
//   "d", "de",
//   "e" ]
