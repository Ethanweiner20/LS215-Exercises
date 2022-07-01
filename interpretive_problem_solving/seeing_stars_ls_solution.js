// Seeing Stars (LS Solution)

function repeat(char, times) {
  let repeated = '';

  for (let i = 0; i < times; i += 1) {
    repeated += char;
  }

  return repeated;
}

function buildStarRow(spacesBetween, spacesPadding) {
  const asterisks = ['*', '*', '*'];
  const starRow = asterisks.join(repeat(' ', spacesBetween));
  return repeat(' ', spacesPadding) + starRow;
}

function star(n) {
  const middleIdx = Math.floor(n / 2);
  const spacingBuilder1 = (idx) => idx;
  const spacingBuilder2 = (idx) => (n - 3) / 2 - idx;
  starHalf(middleIdx, spacingBuilder1, spacingBuilder2);
  console.log(repeat('*', n));
  starHalf(middleIdx, spacingBuilder2, spacingBuilder1);
}

function starHalf(middleIdx, paddingBuilder, betweenSpacingBuilder) {
  for (let i = 0; i < middleIdx; i += 1) {
    console.log(buildStarRow(betweenSpacingBuilder(i), paddingBuilder(i)));
  }
}

star(7);
star(9);
