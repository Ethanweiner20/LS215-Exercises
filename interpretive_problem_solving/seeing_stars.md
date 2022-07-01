# Seeing Stars

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A grid size `n` (odd integer)
  - `n` >= `7`
- **Output**: A star that fits in a grid of size `n`x`n`
- **Definitions and Rules**:
  - The middle row has `n` starts that take up the entire grid width
  - Every other row has exactly three stars, separated by different amounts of spacing
  - The bottom-half is the reverse of the top-half
  - Top-half: Left-padding increases, spacing decreases
  - Maximum padding/spacing: # of rows - 1

_Questions_:

- Do we need to explicitly print spaces for the right padding?

_Edge Cases_: None

# EXAMPLES/TESTS

Given

n = 7:

Left | Spacing
0 2
1 1
2 0

n = 9:
Left | Spacing
0 3
1 2
2 1
3 0

# IDEAS

- Determine the # of rows first (`(n - 1) / 2`). Build the rows incrementally, starting w/ a spacing of one less than the # of rows, and starting with a padding of 0. Decrement the spacing, increment the padding. Reverse top half for bottom half. Print all rows.

# DATA STRUCTURES

- **Intermediate**: Build up an array of `rows` that can be output at the end. Rows themselves are strings.

# ALGORITHM

**Description**: Determine the # of rows first (`(n - 1) / 2`). Build the rows incrementally, starting w/ a spacing of one less than the # of rows, and starting with a padding of 0. Decrement the spacing, increment the padding. Reverse top half for bottom half. Print all rows.

Given a grid size `n`:

- Build the `topHalf` ##
- Build the `middle` by repeating `n` stars
- Build the `bottomHalf` by copying AND reversing the top half
- Output all rows in `topHalf`, `middle`, and `bottomHalf`

## Build the top half of the star

Given a grid size `n`:

- Set the `numRows` to `(n - 1) / 2`
- Create an array from `numRows` (Array#from), tracking the `rowIndex`
  - Set the `padding` to `rowIndex`
  - Set the `spacing` to `numRows - rowIndex - 1`
  - Return a string of the `padding` concatenated w/ three stars separated by `spacing`
    - Join three stars w/ `spacing`
- Return the array of rows

# IMPLEMENTATION DETAILS

- `Array.prototype.from`: Takes a map function w/ index as 2nd argument
- `Array.prototype.reverse` is destructive -> make copy
