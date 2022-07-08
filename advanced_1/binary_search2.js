// Binary Search

function binarySearch(array, searchItem) {
  let low = 0;
  let high = array.length;

  while (high > low) {
    const middleIndex = Math.floor((high - low) / 2) + low;
    const middleElement = array[middleIndex];

    if (searchItem === middleElement) {
      return middleIndex;
    } else if (searchItem < middleElement) {
      high = middleIndex;
    } else {
      low = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 4)); // 3

/*
Low: 3, High: 5
Low: 4, High: 5

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
