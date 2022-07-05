// Featured Number

const LARGEST_FEATURED_NUMBER = 9876543201;
const ERROR_MESSAGE =
  'There is no possible number that fulfills those requirements.';

function featured(startingNumber) {
  if (startingNumber >= LARGEST_FEATURED_NUMBER) return ERROR_MESSAGE;

  let candidate = nextOddMultipleOf7(startingNumber);

  for (; candidate <= LARGEST_FEATURED_NUMBER; candidate += 14) {
    if (uniqueDigits(candidate)) return candidate;
  }
}

function nextOddMultipleOf7(lowerBound) {
  let candidate = lowerBound + 1;

  while (!isOddMultipleOf7(candidate)) {
    candidate += 1;
  }

  return candidate;
}

function isOddMultipleOf7(candidate) {
  return candidate % 7 === 0 && (candidate % 2 === 1 || candidate % 2 === -1);
}

function uniqueDigits(candidate) {
  const digits = String(candidate).split('');

  return [...new Set(digits)].length === digits.length;
}

console.log(featured(12)); // 21
console.log(featured(20)); // 21
console.log(featured(21)); // 35
console.log(featured(997)); // 1029
console.log(featured(1029)); // 1043
console.log(featured(999999)); // 1023547
console.log(featured(999999987)); // 1023456987
console.log(featured(9876543186)); // 9876543201
console.log(featured(9876543200)); // 9876543201
console.log(featured(9876543201)); // "There is no possible number that fulfills those requirements."

// Non-Positive Numbers

console.log(featured(0)); // 7
console.log(featured(-7)); // 7
console.log(featured(-14)); // -7
console.log(featured(-9876543500)); // -9876543201
