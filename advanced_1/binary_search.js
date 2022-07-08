// Binary Search

function binarySearch(array, searchItem) {
  function search(slice, shiftIndex) {
    if (slice.length === 0) return -1;

    const middleIndex = Math.floor(slice.length / 2);
    const middleElement = slice[middleIndex];

    if (searchItem === middleElement) {
      return shiftIndex + middleIndex;
    }

    if (searchItem < middleElement) {
      return search(slice.slice(0, middleIndex), shiftIndex);
    }

    return search(slice.slice(middleIndex + 1), shiftIndex + middleIndex + 1);
  }

  return search(array, 0);
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3

/*
Index Shift: 0, Middle Index: 2 -> Search right half
Index Shift: (middle index + 1) = 3, Middle Index: 1 -> Search left half
Index Shift: 3, Middle Index: 0 -> Found! -> Index = 3 + 0 = 2
*/

const yellowPages = [
  'Apple Store',
  'Bags Galore',
  'Bike Store',
  'Donuts R Us',
  'Eat a Lot',
  'Good Food',
  'Pasta Place',
  'Pizzeria',
  'Tiki Lounge',
  'Zooper',
];
console.log(binarySearch(yellowPages, 'Pizzeria')); // 7
console.log(binarySearch(yellowPages, 'Apple Store')); // 0

console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 77)); // -1
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 89)); // 7
console.log(binarySearch([1, 5, 7, 11, 23, 45, 65, 89, 102], 5)); // 1

console.log(
  binarySearch(
    ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
    'Peter'
  )
); // -1
console.log(
  binarySearch(
    ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler'],
    'Tyler'
  )
); // 6

// Edge Cases

// Empty array
console.log(binarySearch([], 1)); // -1

// Search element is repeated
console.log(
  binarySearch(
    ['Alice', 'Bonnie', 'Kim', 'Pete', 'Rachel', 'Sue', 'Tyler', 'Tyler'],
    'Tyler'
  )
); // 6
