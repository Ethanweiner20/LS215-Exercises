# Transpose MxN

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A matrix of any size `mxn`
- **Output**: The transposed version of the matrix
- **Definitions and Rules**:
  - `transpose` should be non-destructive?
  - Let `m` be the # of rows
  - Let `n` be the # of columns

_Questions_:

- Can we assume the matrix is square? (no)
- Can we assume the matrix is non-empty? (yes)

_Edge Cases_:

- Matrix is empty?
- Matrix is 1x1
- Matrix contains duplicate elements (shouldn't matter)

# EXAMPLES/TESTS

Separate file

# IDEAS

- Iterate over the columns -> build rows
- Iterate over the rows -> build columns
  - Easier -- initialize empty rows; for each row: push each element to every new row
- Which is easier?
- Since iteration is complex, avoid using abstractions at first

# DATA STRUCTURES

- **Intermediate**: Use a matrix with `n` rows, pushing `m` columns to it => `nxm` matrix

# ALGORITHM

Given a `matrix`:

- Determine the values of `m` and `n`:
  - `m` is the number of rows in `matrix` (`matrix.length`)
  - `n` is the number of columns in `matrix` (`matrix[0].length`)
- Build a `newMatrix` of `n` empty rows
- Fill the columns of `newMatrix` with the values of the rows in `matrix`##

## Fill the new matrix

Given an `oldMatrix` and `newMatrix`:

- Iterate over the rows in `oldMatrix`:
  - Iterate over each row, tracking the element and `oldColumnIndex`:
    - Append the element to the row in `newMatrix` at `oldColumnIndex`

# IMPLEMENTATION DETAILS

- Use `Array.from` w/ callback to build empty rows
