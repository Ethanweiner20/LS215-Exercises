// Diamonds
/* eslint-disable id-length */

const STAR = '*';

function diamond(n) {
  const top = diamondTop(n);
  const middle = STAR.repeat(n);
  const bottom = top.slice().reverse();

  [...top, middle, ...bottom].forEach((row) => console.log(row));
}

function diamondTop(n) {
  const rows = [];

  for (let starCount = 1; starCount <= n - 2; starCount += 2) {
    rows.push(createRow(starCount, n));
  }

  return rows;
}

function createRow(starCount, rowWidth) {
  const stars = STAR.repeat(starCount);
  const padding = ' '.repeat((rowWidth - starCount) / 2);

  return padding + stars;
}

diamond(1);
diamond(3);
diamond(9);
