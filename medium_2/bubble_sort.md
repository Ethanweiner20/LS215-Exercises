# Bubble Sort

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An `array`
- **Side Effects**: `array` is sorted in place with bubble sort
- **Definitions and Rules**:
  - **Bubble Sort**:
    - Swaps consecutive elements, starting from index 0 -> n, up to index n - 1 -> n
    - Stop swapping if none swapped
  - Try to implement "minor optimization technique"
  - Array can contain either numbers or strings

_Questions_:

- Can the array contain mixed data types?
- Can the array contain elements beside numbers/strings?
- Should the function return a meaningful value? (assumption: no)

_Edge Cases_:

- Empty array -> no mutation
- 1 element array -> no mutation
- Sorted array -> no mutation
- Array contains duplicate elements

# EXAMPLES/TESTS

Spearate file

# IDEAS

- Minor optimization technique?

# DATA STRUCTURES

- **Input**: Array
  - Don't use an intermediate array: sort in place

# ALGORITHM

**Description**: If the length of the array is `length`: Iterate from `0` to `length - 1` (`startingIndex`). For each iteration, iterate from `startingIndex` to `length - 1` (`swapIndex`). Swap elements as necessary. Use a flag to determine the first pass in which no elements are swapped -- at that point, break.

Given an `array`:

- Determine the `length` of the `array`
- Iterate from `length - 2` to `0`, tracking `endIndex`
  - Initialize a flag `swapped` to `false`
  - Iterate from `0` to `endIndex`, tracking `swapIndex`
    - If the element at `swapIndex` > element at `swapIndex + 1`:
      - Swap the elements in place ##
      - Set the flag `swapped` to `true`
  - If no elements were `swapped` on this pass -> break from loop
  - **For testing**: Log the `startIndex` (determine # of passes)

Example: `[6, 2, 7, 1, 4]`

Iterate from 0 to 3:
First pass: `[2, 6, 1, 4, 7]`
Second pass: `[]`

## Swap elements

Use array destructuring to easily reassign array elements:

`[array[swapIndex], array[swapIndex + 1]] = [array[swapIndex + 1], array[swapIndex]`

# IMPLEMENTATION DETAILS

- For testing, log # of passes
