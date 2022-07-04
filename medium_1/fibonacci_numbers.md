# Fibonacci Numbers

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A non-negative integer `n`
- **Output**: The `nth` Fibonacci number
- **Definitions and Rules**:
  - Solution must use recursion
  - `f(n) = f(n-1) + f(n - 2)`

_Questions_:

- Is `n` always a positive integer?

_Edge Cases_:

- `n` is 1 -> 1 (by definition)
- `n` is 2 -> 1 (by definition)
- Large values of `n`?

# EXAMPLES/TESTS

Separate file

# DATA STRUCTURES

- Everything should be done using simple arithmetic -> numbers

# ALGORITHM

Given a positive integer `n`:

- If `n` is 1 or 2 -> return 1
- Otherwise, return f(n - 1) + f(n - 2)

Problem: Requires a ton of recursive calls, since each call must call itself twice.

## Tail Recursion

**Idea**: Initialize the parameters to 1 and 1. On each recursive call, reassign the paramters

Given a positive integer `n`, f(n-1) `f1` and f(n-2) `f2`:

- If `n` is 1 -> Return `f1 + f2`
- Otherwise, call recursively with `f1 = f1 + f2` and `f2 = f1`

Use a starter function to get it going

# IMPLEMENTATION DETAILS
