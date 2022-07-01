// 1000 Lights

// Simulation Approach

function lightsOn(switches) {
  const lights = initializeLights(switches);

  for (let round = 1; round <= switches; round++) {
    toggleLights(lights, round);
  }

  return lights.reduce((onLights, state, index) => {
    return state ? onLights.concat(index + 1) : onLights;
  }, []);
}

function initializeLights(numLights) {
  return Array.from({ length: numLights }, () => false);
}

function toggleLights(lights, round) {
  for (let light = round; light < lights.length; light += round) {
    lights[light - 1] = !lights[light - 1];
  }
}

// Mathematical Approach

function lightsOnMathematical(switches) {
  const lights = [];
  let number = 1;

  while (number * number <= switches) {
    lights.push(number * number);
    number += 1;
  }

  return lights;
}

// Generic Cases

console.log(lightsOn(2)); // [1]
console.log(lightsOn(3)); // [1]
console.log(lightsOn(4)); // [1, 4]
console.log(lightsOn(5)); // [1, 4]
console.log(lightsOn(6)); // [1, 4]
console.log(lightsOn(100)); // [1, 4, 9...]

// Edge cases

console.log(lightsOn(1)); // [1]
console.log(lightsOn(0)); // []

// Generic Cases

console.log(lightsOnMathematical(2)); // [1]
console.log(lightsOnMathematical(3)); // [1]
console.log(lightsOnMathematical(4)); // [1, 4]
console.log(lightsOnMathematical(5)); // [1, 4]
console.log(lightsOnMathematical(6)); // [1, 4]
console.log(lightsOnMathematical(100)); // [1, 4, 9...]

// Edge cases

console.log(lightsOnMathematical(1)); // [1]
console.log(lightsOnMathematical(0)); // []
