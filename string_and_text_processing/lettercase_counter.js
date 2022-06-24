// Lettercase Counter

// 2 approaches
// 1. Match all cases separately -> Return length of match arrays
// 2. Iterate over characters -> Accumulate matches

function letterCaseCount(string) {
  const matchLength = (regex) => (string.match(regex) || []).length;

  return {
    lowercase: matchLength(/[a-z]/g),
    uppercase: matchLength(/[A-Z]/g),
    neither: matchLength(/[^a-z]/gi),
  };
}

// function letterCaseCount(string) {
//   const counts = {
//     lowercase: 0,
//     uppercase: 0,
//     neither: 0,
//   };

//   string.split('').forEach((char) => {
//     if (/[a-z]/.test(char)) counts.lowercase += 1;
//     else if (/[A-Z]/.test(char)) counts.uppercase += 1;
//     else counts.neither += 1;
//   });

//   return counts;
// }

console.log(letterCaseCount('abCdef 123')); // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef')); // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123')); // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount('')); // { lowercase: 0, uppercase: 0, neither: 0 }
