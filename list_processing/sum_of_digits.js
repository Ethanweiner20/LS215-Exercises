// Sum of Digits

function sum(number) {
  return String(number).split('')
    .reduce((total, digit) => total + parseInt(digit, 10), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45