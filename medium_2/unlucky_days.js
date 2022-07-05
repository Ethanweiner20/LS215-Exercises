// Unlucky Days

const FRIDAY_INDEX = 5;

function fridayThe13ths(year) {
  return countFridays(thirteenths(year));
}

function thirteenths(year) {
  const dates = [];

  for (let monthIndex = 0; monthIndex < 12; monthIndex++) {
    dates.push(new Date(year, monthIndex, 13));
  }

  return dates;
}

function countFridays(dates) {
  const isFriday = (date) => date.getDay() === FRIDAY_INDEX;
  return dates.filter(isFriday).length;
}

console.log(fridayThe13ths(1986)); // 1
console.log(fridayThe13ths(2015)); // 3
console.log(fridayThe13ths(2017)); // 2
console.log(fridayThe13ths(2022)); // 1

/*
Further Exploration

I think that `Array.prototype.reduce` as a good choice:
- Operation is clearly reduction
- Doesn't sacrifice readability much
- Perhaps would be more clear with a separate count variable initialized to zero

*/
