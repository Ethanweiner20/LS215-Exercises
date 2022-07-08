// Merge Sort

// Merge Sort
function mergeSort(array) {
  if (array.length < 2) return array;

  const middleIndex = Math.floor(array.length / 2);
  const left = array.slice(0, middleIndex);
  const right = array.slice(middleIndex);

  return merge(mergeSort(left), mergeSort(right));
}

// Merge
function merge(array1, array2) {
  const merged = [];

  while (array1.length && array2.length) {
    merged.push(array1[0] < array2[0] ? array1.shift() : array2.shift());
  }

  return merged.concat(array1, array2);
}

console.log(merge([1], [2])); // [1, 2]
console.log(merge([1, 2], [3])); // [1, 2, 3]
console.log(merge([1, 3], [2, 4])); // [1, 2, 3, 4]
console.log(merge([1, 3, 9], [2, 4])); // [1, 2, 3, 4, 9]

// Duplicates
console.log(merge([1, 3, 9], [2, 3, 4])); // [1, 2, 3, 3, 4, 9]

console.log(merge([1, 3, 9], [2, 4, 5, 6])); // [1, 2, 3, 4, 5, 6, 9]

console.log(merge(['c', 'd'], ['a', 'b'])); // ['a', 'b', 'c', 'd']

console.log(mergeSort([9, 5, 7, 1])); // [1, 5, 7, 9]

/*
   [9, 5, 7, 1]
       /  \
  [9, 5] [7, 1]
  /  \     /  \
[9]  [5]  [7]  [1]
 \    /    \     /
 [5, 9]    [1, 7]
    \       /
    [1, 5, 7, 9]

*/

console.log(mergeSort([])); // []
console.log(mergeSort([3])); // [3]
console.log(mergeSort([1, 2, 3])); // [1, 2, 3]

console.log(mergeSort([5, 3])); // [3, 5]
console.log(mergeSort([6, 2, 7, 1, 4])); // [1, 2, 4, 6, 7]

console.log(
  mergeSort(['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'])
);
// ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

console.log(
  mergeSort([7, 3, 9, 15, 23, 1, 6, 51, 22, 37, 54, 43, 5, 25, 35, 18, 46])
);
// [1, 3, 5, 6, 7, 9, 15, 18, 22, 23, 25, 35, 37, 43, 46, 51, 54]
