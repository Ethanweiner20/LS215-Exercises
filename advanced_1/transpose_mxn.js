function transpose(matrix) {
  const newMatrix = emptyMatrix(matrix[0].length);
  fillTransposed(newMatrix, matrix);
  return newMatrix;
}

function emptyMatrix(numRows) {
  return Array.from({ length: numRows }, () => []);
}

function fillTransposed(newMatrix, oldMatrix) {
  oldMatrix.forEach((row) => {
    row.forEach((element, oldColumnIndex) => {
      newMatrix[oldColumnIndex].push(element);
    });
  });
}

const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix = transpose(matrix);

console.log(newMatrix); // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.log(matrix); // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]

const matrix2 = [
  [1, 5, 8, 10],
  [4, 7, 2, 3],
  [3, 9, 6, -5],
  [-3, 0, 1, 12],
];

console.log(transpose(matrix2));
// [[1, 4, 3, -3],
//  [5, 7. 9, 0],
//  [8, 2, 6, 1],
//  [10, 3, -5, 12]]

console.log(transpose([[1, 2, 3, 4]])); // [[1], [2], [3], [4]]
console.log(transpose([[1], [2], [3], [4]])); // [[1, 2, 3, 4]]
console.log(transpose([[1]])); // [[1]]

console.log(
  transpose([
    [1, 2, 3, 4, 5],
    [4, 3, 2, 1, 0],
    [3, 7, 8, 6, 2],
  ])
);
// [[1, 4, 3], [2, 3, 7], [3, 2, 8], [4, 1, 6], [5, 0, 2]]

/*
m = 3
n = 5

New Matrix: [[]x5]

FillTransposed matrix:

[1,...]
[2,...]
[3,...]
...

*/
