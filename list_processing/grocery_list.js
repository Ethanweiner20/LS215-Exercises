// Grocery List

// Solution 1
// function buyFruit(list) {
//   const groceries = [];

//   list.forEach(([item, count]) => {
//     for (let index = 0; index < count; index++) {
//       groceries.push(item);
//     }
//   });

//   return groceries;
// }

// function buyFruit(list) {
//   return list.map(([item, count]) => repeat(item, count)).flat();
// }

// function repeat(item, count) {
//   const items = [];

//   for (let index = 0; index < count; index++) {
//     items.push(item);
//   }

//   return items;
// }

function buyFruit(list) {
  return list.flatMap(([item, count]) => new Array(count).fill(item));
}

console.log(
  buyFruit([
    ['apple', 3],
    ['orange', 1],
    ['banana', 2],
  ])
);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]
