// Capitalize Words

// Using Regex
// function wordCap(string) {
//   return string.replace(/\b(\w)/g, (match) => match.toUpperCase());
// }

// function wordCap(string) {
//   return string
//     .split(' ')
//     .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
//     .join(' ');
// }

function wordCap(string) {
  return string.replace(/(?<!")\b[a-z]/g, (match) => match.toUpperCase());
}

console.log(wordCap('four score and seven')); // "Four Score And Seven"
console.log(wordCap('the javaScript language')); // "The Javascript Language"
console.log(wordCap('this is a "quoted" word')); // 'This Is A "quoted" Word'
