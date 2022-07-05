# Triangle Sides

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: Three side lengths, `a`, `b`, `c`
  - Note: Using single-letter variable names b/c standard
- **Output**: One of four strings classifying the triangle
- **Definitions and Rules**:
  - If any sides are less than or equal to zero -> invalid
  - If one side >= sum of either two -> Invalid

_Questions_:

- Can the input be negative?
- Can we expect 3 paramters

_Edge Cases_:

- Sum of two sides EQUALS sum of other side -> invalid
- Decimal number sides

# EXAMPLES/TESTS

Separate file

# IDEAS

- Invalid cases first
  - Negative side lengths
  - Invalid sums
- Next, order matters:
  - Equilateral first (all 3 equal)
    - Only check 2 <- transitive property
  - Isosceles next
    - Check all 3 pairs
  - Otherwise scalene

# DATA STRUCTURES

- **Input**: Represent side lengths as array for sorting?
- **Rules**: None

# ALGORITHM

Given triangle side lengths `a`, `b`, `c`

- Check for invalid triangles
  - If any negative -> Return 'invalid'
  - If 2 shorter sides sum is less than or equal to max -> Return 'invalid'
- All 3 equal -> Return 'equilateral'
- Any 3 pairs equal -> Return 'isosceles'
- Return 'scalene'

# IMPLEMENTATION DETAILS

- Potentially use rest parameter to capture params as array?
