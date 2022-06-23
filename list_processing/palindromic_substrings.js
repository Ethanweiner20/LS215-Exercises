// Palindromic Substrings

const { substrings } = require('./all_substrings');

// Note: Single characters are not palindromes

/*
- Filter for palindromes
  - Is a palindrome if its length > 1 & its equal to itself reserved
*/

function palindromes(string) {
  return substrings(string).filter(isPalindrome);
}

function isPalindrome(string) {
  return string.length > 1 && string === string.split('').reverse().join('');
}

// function isPalindrome(string) {
//   if (string.length < 2) {
//     return false;
//   }

//   for (let index = 0; index <= string.length / 2; index++) {
//     const first = string[index];
//     const second = string[string.length - index - 1];

//     if (first !== second) {
//       return false;
//     }
//   }

//   return true;
// }

console.log(palindromes('abcd')); // []
console.log(palindromes('madam')); // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [
//   'll',
//   '-madam-',
//   '-madam-did-madam-',
//   'madam',
//   'madam-did-madam',
//   'ada',
//   'adam-did-mada',
//   'dam-did-mad',
//   'am-did-ma',
//   'm-did-m',
//   '-did-',
//   'did',
//   '-madam-',
//   'madam',
//   'ada',
//   'oo',
// ];

console.log(palindromes('knitting cassettes'));
// returns
// ['nittin', 'itti', 'tt', 'ss', 'settes', 'ette', 'tt'];
