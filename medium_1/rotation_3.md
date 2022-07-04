# Rotation Part 3

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A `number`
- **Output**: The maximum rotation of that `number`
- **Definitions and Rules**:
  - **Maximum Rotation**: If the length of the number is `n`, the maximum rotation of that `number` is the `number` after `n - 1` successive rotations:
    - Rotate all `n` digits
    - Rotate last `n - 1` digits
    - ...
    - Rotate last `2` digits

_Questions_:

- Can I assume an argument is given?

_Edge Cases_:

- The number contains zeroes: Might get dropped if becomes leading
  - Potential problem: Number is converted to base 8 during processing?
    - Should be taken care of by the fact that `rotateRightMostDigit` uses `parseInt` with a radix of `10` (converts rotated string to base 10 integer)

# EXAMPLES/TESTS

Separate file

# IDEAS

- Iteration or recursion?
- Try recursive solution

# DATA STRUCTURES

- **Input**: Keep representing as `number` to use `rotateRightMostDigits`
  - Note: If maintaining leading zero -> represent as string

# ALGORITHM

**Description**: Iterate from the size of `number` down to 2. Rotate the rightmost digits of the number each time.

# IMPLEMENTATION DETAILS
