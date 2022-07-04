# Rotation Part 1

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An `array` of elements of any data type
- **Output**: The same `array` rotated left (first element moved to end of array)
- **Definitions and Rules**:
  - If the input is not an `array` (or no argument given) -> return undefined
  - Array can contain mixed data types
  - Empty array -> Return empty array
  - Do not mutate input `array`

_Questions_:

- Must we consider sparse arrays?
- Can empty items be treated like `undefined` values?

_Edge Cases_:

- If the input is not an `array` -> return undefined
- If no argument is given -> return undefined
- Array can contain mixed data types
- Empty array -> Return empty array

# EXAMPLES/TESTS

Separate file

# IDEAS

- Use slicing to build a new array

# DATA STRUCTURES

- **Input**: Array
- **Intermediate**: Array slices

# ALGORITHM

**Description**: Retrieve the first element of array + slice the rest of the array -> append first element to end of array. Handle edge cases first.

Given an `array`:

- If `array` is not an array -> return `undefined` (Array#isArray)
- If `array` is empty -> return empty array
- Create a new array consisting of two parts, in the following order:
  - A slice from index 1 to the end
  - The first element
- Return the new array

# IMPLEMENTATION DETAILS
