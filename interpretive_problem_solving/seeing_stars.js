/* eslint-disable id-length */
const STAR = '*';

function star(n) {
  const topHalf = topHalfStar(n);
  const middle = STAR.repeat(n);
  const bottomHalf = topHalf.slice().reverse();

  [...topHalf, middle, ...bottomHalf].forEach((row) => console.log(row));
}

function topHalfStar(n) {
  const numRows = (n - 1) / 2;

  return Array.from({ length: numRows }, (_, rowIndex) => {
    const padding = ' '.repeat(rowIndex);
    const spacing = ' '.repeat(numRows - rowIndex - 1);
    const stars = [STAR, STAR, STAR].join(spacing);

    return `${padding}${stars}`;
  });
}

star(7);
// logs
// *  *  *
//  * * *
//   ***
// *******
//   ***
//  * * *
// *  *  *

console.log('\n');

star(9);
// logs
// *   *   *
//  *  *  *
//   * * *
//    ***
// *********
//    ***
//   * * *
//  *  *  *
// *   *   *
