// Caesar Cipher

const UPPER_SHIFT = 65;
const LOWER_SHIFT = 97;
const ALPHABET_LENGTH = 26;

function caesarEncrypt(plaintext, key) {
  return plaintext.replace(/./g, (match) => {
    if (/[A-Z]/.test(match)) return letterShift(match, key, 'upper');
    else if (/[a-z]/.test(match)) return letterShift(match, key, 'lower');
    return match;
  });
}

function letterShift(letter, key, letterCase) {
  const shift = letterCase === 'upper' ? UPPER_SHIFT : LOWER_SHIFT;
  const alphabetIndex = letter.charCodeAt(0) - shift;
  const newAlphabetIndex = (alphabetIndex + key) % ALPHABET_LENGTH;
  return String.fromCharCode(newAlphabetIndex + shift);
}

// simple shift
console.log(caesarEncrypt('A', 0)); // "A"
console.log(caesarEncrypt('A', 3)); // "D"

// wrap around
console.log(caesarEncrypt('y', 5)); // "d"
console.log(caesarEncrypt('a', 47)); // "v"

// Wrap around multiple times
console.log(caesarEncrypt('abc', 53)); // "bcd"

// all letters
console.log(caesarEncrypt('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 25));
// "ZABCDEFGHIJKLMNOPQRSTUVWXY"
console.log(caesarEncrypt('The quick brown fox jumps over the lazy dog!', 5));
// "Ymj vznhp gwtbs ktc ozrux tajw ymj qfed itl!"

// many non-letters
console.log(
  caesarEncrypt(
    'There are, as you can see, many punctuations. Right?; Wrong?',
    2
  )
);
// "Vjgtg ctg, cu aqw ecp ugg, ocpa rwpevwcvkqpu. Tkijv?; Ytqpi?"

// Empty string
console.log(caesarEncrypt('', 3)); // ''
