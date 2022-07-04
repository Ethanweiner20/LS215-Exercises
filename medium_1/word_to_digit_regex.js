// Word to Digit (Regex)

// Word to Digit

const numberWords = [
  'zero',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
];

function wordToDigit(sentence) {
  const regex = new RegExp(`\\b(${numberWords.join('|')})\\b`, 'gi');
  return sentence.replace(regex, (numberWord) => {
    return String(numberWords.indexOf(numberWord.toLowerCase()));
  });
}

// Generic Cases

console.log(
  wordToDigit('Please call me at five five five one two three four. Thanks.')
);
// "Please call me at 5 5 5 1 2 3 4. Thanks."

// Edge Cases

console.log(wordToDigit('')); // ''
console.log(wordToDigit('Hello there.')); // 'Hello there
console.log(wordToDigit('five six')); // '5 6'
console.log(wordToDigit('fivesix')); // 'fivesix'
console.log(wordToDigit('fIvE Six')); // '5 6'
console.log(wordToDigit('five six seven. Hello there.')); // '5 6 7. Hello there.'
console.log(wordToDigit('five six seven.')); // '5 6 7.'
