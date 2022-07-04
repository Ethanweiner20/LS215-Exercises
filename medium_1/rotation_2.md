# Rotation Part 2

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A `number` and the number of digits `n` to rotate
- **Output**: The same number with the last `n` digits rotated
- **Definitions and Rules**:
  - **Rotation**: Rotate first digit in slice to the left one (move to end of array)

_Questions_:

- Can the number of digits `n` > length of `number`?
- Can the number of digits `n` be 0 or negative?
- Can the `number` be a singular digit?

_Edge Cases_:

- If `n === 1` -> number unchanged
  - No need to handle differently?
- `number` is one digit -> number unchanged

# EXAMPLES/TESTS

Separate sheet

# IDEAS

- Simply rotate the last `n` digits using function from previous solution
- No need to handle edge cases differently

# DATA STRUCTURES

- **Input**: Represent digits as string to make easier to work with
  - Use string slices

# ALGORITHM

**Description**: Convert input to string. Slice the string into two parts, based on the number of digits `n`. Rotate the second part. Concatenate the two slices back together and return as a number.

# IMPLEMENTATION DETAILS

- slice (using a negative integer (`n`))
- parseInt
