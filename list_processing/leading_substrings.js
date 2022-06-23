// Leading Substrings

/*
# ALGORITHM

1. Transformation w/ an outside accumulator (better)
2. Reduction with an outside accumulator
*/

// function leadingSubstrings(string) {
//   let leadingSubstring = '';

//   return string.split('').map((char) => {
//     leadingSubstring += char;
//     return leadingSubstring;
//   });
// }

function leadingSubstrings(string) {
  return string.split('').map((_, index) => string.slice(0, index + 1));
}

console.log(leadingSubstrings('abc')); // ["a", "ab", "abc"]
console.log(leadingSubstrings('a')); // ["a"]
console.log(leadingSubstrings('xyzzy')); // ["x", "xy", "xyz", "xyzz", "xyzzy"]
