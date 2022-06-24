// Staggered Caps Part 2
// Staggered Caps Part 1

function staggeredCase(string) {
  let upperCase = false;

  return string
    .split('')
    .map((char) => {
      if (/[a-z]/i.test(char)) {
        upperCase = !upperCase;
      }

      return upperCase ? char.toUpperCase() : char.toLowerCase();
    })
    .join('');
}

// Note: `toUpperCase` and `toLowerCase` do not affect non-alphabetic characters

console.log(staggeredCase('I Love Launch School!')); // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS')); // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers')); // "IgNoRe 77 ThE 444 nUmBeRs"
