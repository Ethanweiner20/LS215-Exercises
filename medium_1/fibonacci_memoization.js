// Fibonacci Numbers (Memoization)

// Idea: Use array to accumulate values

/*
ALGORITHM:
- Try to find an already computed value
- If found -> return that
- Otherwise, compute the sum of the previous two, and add to computed
*/

function fibonacci(nth) {
  const memo = { 1: 1, 2: 1 };

  return (function fibonacciMemo(n) {
    memo[n] = memo[n] || fibonacciMemo(n - 1) + fibonacciMemo(n - 2);
    return memo[n];
  })(nth);
}

/*
n = 4:
 j       f(4)
     /        \
   f(3)      f(2)
  /   \
f(2)  f(1)=1
 / \
f(1)f(0)
*/

console.log(fibonacci(20)); // 6765
console.log(fibonacci(50)); // 12586269025
console.log(fibonacci(75)); // 2111485077978050
