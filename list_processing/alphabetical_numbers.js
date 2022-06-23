const NUMBER_WORDS = [
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
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
];

function alphabeticNumberSort(numbers) {
  return [...numbers].sort((num1, num2) => {
    const word1 = NUMBER_WORDS[num1];
    const word2 = NUMBER_WORDS[num2];
    if (word1 < word2) {
      return -1;
    } else if (word1 > word2) {
      return 1;
    }
    return 0;
  });
}

console.log(alphabeticNumberSort([
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

/*
# ALGORITHM

Option 1:
- Sort w/ custom comparison function

*/
