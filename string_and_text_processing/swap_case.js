// Swap Case

function swapCase(string) {
  return string.replace(/[a-z]/gi, (char) => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else {
      return char.toLowerCase();
    }
  });
}

console.log(swapCase('CamelCase')); // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV')); // "tONIGHT ON xyz-tv"
