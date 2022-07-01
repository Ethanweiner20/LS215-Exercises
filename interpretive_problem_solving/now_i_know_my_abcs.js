// Now I Know My ABCs

// Version 1: Deletion
function isBlockWord(word) {
  const blocks = [
    ['B', 'O'],
    ['X', 'K'],
    ['D', 'Q'],
    ['C', 'P'],
    ['N', 'A'],
    ['G', 'T'],
    ['R', 'E'],
    ['F', 'S'],
    ['J', 'W'],
    ['H', 'U'],
    ['V', 'I'],
    ['L', 'Y'],
    ['Z', 'M'],
  ];
  const characters = word.toUpperCase().split('');

  for (let index = 0; index < characters.length; index++) {
    const character = characters[index];
    const blockIndex = blocks.findIndex((block) => block.includes(character));

    if (blockIndex === -1) {
      return false;
    }

    blocks.splice(blockIndex, 1);
  }

  return true;
}

// Version 2: Using an accumulator
// function isBlockWord(word) {
//   const usedBlockLetters = [];
//   const characters = word.toUpperCase().split('');

//   for (let index = 0; index < characters.length; index++) {
//     const character = characters[index];

//     if (usedBlockLetters.includes(character)) {
//       return false;
//     }

//     const block = BLOCKS.find((block) => block.includes(character));
//     usedBlockLetters.push(...block);
//   }

//   return true;
// }

// Version 3: Using Regex

function isBlockWord(word) {
  const BLOCKS = [
    'BO',
    'XK',
    'DQ',
    'CP',
    'NA',
    'GT',
    'RE',
    'FS',
    'JW',
    'HU',
    'VI',
    'LY',
    'ZM',
  ];
  const blocks = BLOCKS.map((block) => new RegExp(`[${block}]`, 'gi'));
  return blocks.every((block) => (word.match(block) || []).length <= 1);
}

// iterates through the blocks to check if for any of the block both the characters are included in the given word

// Version 4
const BLOCKS = [
  'bo',
  'xk',
  'dq',
  'cp',
  'na',
  'gt',
  're',
  'fs',
  'jw',
  'hu',
  'vi',
  'ly',
  'zm',
];

function isBlockWord(word) {
  return !BLOCKS.some((block) => multipleBlockUsages(block, word));
}

function multipleBlockUsages(block, word) {
  let chars = word.toLowerCase().split('');
  return count(chars, block[0]) + count(chars, block[1]) > 1;
}

function count(array, searchElement) {
  return array.reduce(
    (total, element) => (element === searchElement ? total + 1 : total),
    0
  );
}

console.log(isBlockWord('BATCH')); // true
console.log(isBlockWord('BUTCH')); // false
console.log(isBlockWord('jest')); // true
console.log(isBlockWord('an')); // false

// Different cases
console.log(isBlockWord('BatCH')); // true
console.log(isBlockWord('ButCH')); // false

// Edge cases
console.log(isBlockWord('butt')); // false
console.log(isBlockWord('')); // true
console.log(isBlockWord('A')); // true
