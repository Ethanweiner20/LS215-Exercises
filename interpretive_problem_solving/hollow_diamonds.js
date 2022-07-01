// Hollow Diamonds
// Diamonds
/* eslint-disable id-length */

const STAR = '*';

function diamond(n) {
  const leftSpacing = diamondLeftSpacing(n);
  const centerSpacing = diamondCenterSpacing(n);

  for (let index = 0; index < leftSpacing.length; index++) {
    const padding = leftSpacing[index];
    const center = centerSpacing[index];

    let row;

    if (center === 0) {
      row = ' '.repeat(padding) + STAR;
    } else {
      row = ' '.repeat(padding) + STAR + ' '.repeat(center) + STAR;
    }

    console.log(row);
  }
}

function diamondLeftSpacing(n) {
  const maxSpacing = (n - 1) / 2;
  const spacing = [];

  for (let space = maxSpacing; space >= 0; space -= 1) {
    spacing.push(space);
  }

  for (let space = 1; space <= maxSpacing; space++) {
    spacing.push(space);
  }

  return spacing;
}

function diamondCenterSpacing(n) {
  if (n < 3) {
    return [0];
  }

  const spacing = [0];

  for (let space = 1; space <= n - 2; space += 2) {
    spacing.push(space);
  }

  for (let space = n - 4; space >= 1; space -= 2) {
    spacing.push(space);
  }

  spacing.push(0);

  return spacing;
}

diamond(1);
diamond(3);
diamond(9);
