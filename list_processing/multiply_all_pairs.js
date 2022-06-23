// Multiply All Pairs

/*
# ALGORITHM

Declarative
- Compute pairs
  - Map elements in first array to all of its pairs
  - Flatten the array (one level)
- Transform pairs -> products
- Sort in ascending numerical order

Imperative
- Double nested iteration -> multiply pairs -> create new
- Reduction?
*/

// function multiplyAllPairs(arr1, arr2) {
//   return product(arr1, arr2)
//     .map((pair) => pair[0] * pair[1])
//     .sort((a, b) => (a <= b ? -1 : 1));
// }

// function product(arr1, arr2) {
//   return arr1.flatMap((ele1) => arr2.map((ele2) => [ele1, ele2]));
// }

// function multiplyAllPairs(arr1, arr2) {
//   const products = [];

//   arr1.forEach((ele1) => {
//     arr2.forEach((ele2) => products.push(ele1 * ele2));
//   });

//   return products.sort((a, b) => a - b);
// }

function multiplyAllPairs(arr1, arr2) {
  return arr1
    .flatMap((ele1) => arr2.map((ele2) => ele1 * ele2))
    .sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2])); // [2, 4, 4, 6, 8, 8, 12, 16]
