// Fibonacci Numbers (Tail Recursion)

function fibonacci(nth) {
  function fibonacciTail(nth, f1, f2) {
    if (nth === 1) return f1;

    return fibonacciTail(nth - 1, f1 + f2, f1);
  }

  return fibonacciTail(nth, 1, 0);
}

/*
n = 1:
1 + 0 -> 1
n = 2:

n = 2:
f(1, 1 + 0, 1) -> 2
*/

console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(12)); // 144
console.log(fibonacci(20)); // 6765

/*
Fibonacci (no tail): Every call on stack ()

           f(4)
        /        \
      f(3)       f(2)
    /     \      /   \
  f(2)    f(1)  f(1)  f(0)
 /   \
f(1) f(0)

Fibonacci (tail): Every call on stack (O(n))

           f(4)
            |
          f(4, 1, 0)
            |
          f(3, 1, 1)
            |
          f(2, 2, 1) = 3


*/

function fibonacci(nth) {
  // `f2`'s new value becomes the previously computed `f1`
  function fibonacciTail(n, f1, f2) {
    if (n === nth) return f1;
    return fibonacciTail(n + 1, f1 + f2, f1);
  }

  return fibonacciTail(1, 1, 0);
}

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050

/*
    f(n)
     |
  f(n - 1)
     |
  f(n - 2)

Alternative:

    f(1)
      |
    f(2, 1, 1)
      |
    f(3, 2, 1)
     ...
    f(n)
*/
