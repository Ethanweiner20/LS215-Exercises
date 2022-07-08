# Rotating Matrices

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An arbitrary `mxn` `matrix`
- **Output**: The `matrix` rotated 90 degrees counter-clockwise
- **Definitions and Rules**:

_Questions_:

- Can the input matrix be empty? (assumption: yes)
- Can the input matrix have one element? (assumption: yes)

_Edge Cases_:

- Empty
- One element

# EXAMPLES/TESTS

Separate file

# IDEAS

- Straightforward: Iterate over columns backwards -> create approprite rows
- Straightforward: Iterate over rows in reverse order -> create columns (like this idea)

# DATA STRUCTURES

- **Intermediate**: Create an empty matrix for filling

# ALGORITHM

Given a `matrix`:

- Create an empty `newMatrix` w/ `matrix[0].length` rows (##emptyMatrix)
- Fill the `newMatrix` using the rows of the old `matrix`
- Return the `newMatrix`

## Fill the new matrix for rotation

Given an `oldMatrix` and a `newMatrix`:

- Iterate over the rows of `oldMatrix` in reverse (##slice and reverse)
  - For each row, append each element to the appropriate row in `newMatrix`

# IMPLEMENTATION DETAILS
