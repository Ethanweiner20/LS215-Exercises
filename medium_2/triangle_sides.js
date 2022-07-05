// Triangle Sides

function triangle(a, b, c) {
  if (!isValidTriangle(a, b, c)) return 'invalid';

  if (a === b && b === c) return 'equilateral';
  else if (a === b || b === c || a === c) return 'isosceles';
  else return 'scalene';
}

function isValidTriangle(...sides) {
  return !sides.includes(0) && validSides(sides);
}

function validSides(sides) {
  sides.sort((a, b) => a - b);

  return sides[0] + sides[1] > sides[2];
}

console.log(triangle(3, 3, 3)); // "equilateral"
console.log(triangle(3, 3, 1.5)); // "isosceles"
console.log(triangle(3, 4, 5)); // "scalene"
console.log(triangle(0, 3, 3)); // "invalid"
console.log(triangle(3, 1, 1)); // "invalid"
console.log(triangle(3, 1.5, 1.5)); // "invalid"
console.log(triangle(1, 0, 0)); // "invalid"
console.log(triangle(2, 2, -1)); // "invalid"
