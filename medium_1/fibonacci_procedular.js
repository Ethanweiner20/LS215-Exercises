// Fibonnaci Numbers (Procedular)

function fibonacci(nth) {
  let f1 = 1;
  let f2 = 1;

  for (let n = 3; n <= nth; n++) {
    [f1, f2] = [f1 + f2, f1];
  }

  return f1;
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
