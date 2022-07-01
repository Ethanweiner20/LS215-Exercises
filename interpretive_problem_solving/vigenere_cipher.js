// Vigenere Cipher

const UPPER_SHIFT = 65;
const LOWER_SHIFT = 97;
const ALPHABET_LENGTH = 26;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function vigenereEncrypt(plaintext, keyword) {
  let keyPosition = 0;

  return plaintext.replace(/./g, (char) => {
    if (!/[A-Za-z]/.test(char)) return char;
    const encrypted = encryptLetter(char, keyword, keyPosition);
    keyPosition = nextKeyPosition(keyPosition, keyword.length);
    return encrypted;
  });
}

function nextKeyPosition(currentKeyPosition, keywordLength) {
  return (currentKeyPosition + 1) % keywordLength;
}

function encryptLetter(letter, keyword, keyPosition) {
  const keywordLetter = keyword[keyPosition];
  const key = letterToKey(keywordLetter);

  return letterShift(letter, key, /[A-Z]/.test(letter) ? 'upper' : 'lower');
}

function letterToKey(letter) {
  return ALPHABET.indexOf(letter.toUpperCase());
}

function letterShift(letter, key, letterCase) {
  const shift = letterCase === 'upper' ? UPPER_SHIFT : LOWER_SHIFT;
  const alphabetIndex = letter.charCodeAt(0) - shift;
  const newAlphabetIndex = (alphabetIndex + key) % ALPHABET_LENGTH;
  return String.fromCharCode(newAlphabetIndex + shift);
}

// Generic Cases

console.log(vigenereEncrypt('Hello', 'ant')); // 'Hrelb'
console.log(vigenereEncrypt('Hello', 'zap')); // 'Geako'

// Edge cases

console.log(vigenereEncrypt('Hello', 'aNt')); // 'Hrelb'
console.log(vigenereEncrypt('ant', 'hello')); // 'hre'
console.log(vigenereEncrypt('ant', 'b')); // 'bou'
console.log(vigenereEncrypt('H e llo!', 'ant')); // 'H r elb!'
console.log(vigenereEncrypt('', 'aNt')); // ''
console.log(vigenereEncrypt('Hello', 'A')); // 'Hello'

// Combination of requirements

console.log(vigenereEncrypt("Pineapples don't go on pizzas!", 'meat'));
// Bmnxmtpeqw dhz'x gh ar pbldal!
