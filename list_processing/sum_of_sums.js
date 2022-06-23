// Sum of Sums

/*
# ALGORITHM

Reduction approach: Reduce the sum and add to outside array
Transformation approach: No-accumulator -- repeatedly re-evaluate sum up to now
Best approach = Reduction approach w/ accumulator

Final Approach:
- Transform into subsequences reduced into their sums
- Reduce all sums into a final sum

*/

// function sumOfSums(array) {
//   let total = 0;

//   array.reduce((subsequenceSum, num) => {
//     const newSum = subsequenceSum + num;
//     total += newSum;
//     return newSum;
//   }, 0);

//   return total;
// }

function sumOfSums(numbers) {
  return numbers
    .map((_, index) =>
      numbers.slice(0, index + 1).reduce((sum, num) => sum + num)
    )
    .reduce((total, subsequenceSum) => total + subsequenceSum);
}

console.log(sumOfSums([3, 5, 2])); // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3])); // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4])); // 4
console.log(sumOfSums([1, 2, 3, 4, 5])); // 35
