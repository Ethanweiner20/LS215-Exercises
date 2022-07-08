# Merge Sort

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An `array`
- **Output**: The `array` sorted with merge sort
- **Definitions and Rules**:
  - **Merge Sort**:
    - Splits the array until they are sorted
    - Recursively merges sorted arrays back together
  - Recursive?

_Questions_:

- Only have to handle strings/numbers?
- Can array contain different input?
- Does it matter which half of split during merge sort has a greater # of elements (if total # elements is odd)?
- Must we handle sparse arrays?

_Edge Cases_:

- Empty array
- 1-element array
- Already orted array
- Array contains an odd # of #s

# EXAMPLES/TESTS

Separate file

# IDEAS

- Recursive:
  - If length of array is 1 element or less -> return itself
  - Split 2 arrays
  - Perform merge sort on each --> sorted arrays
  - Merge the results

# DATA STRUCTURES

- Arrays
  - Two arrays for splitting
  - One new array resulting from merge

# ALGORITHM

Given an `array`:

- If length of `array` is less than 2 -> return it
- Determine the middle index: `Math.floor(array.length / 2)`
- Slice the array into two parts:
  - Index 0 to middle index (exclusive)
  - Middle index to end
- Perform merge sort each array (## recursive call)
- Merge the two now-sorted arrays into another sorted array##

## Merge two sorted arrays

**Description**: Shift until both arrays are empty.

Note: Is destructive

Given `array1` and `array2`:

- Initialize an array `merged` to empty
- While `array1` or `array2` is non-empty:
  - Compare the first elements of `array1` and `array2`, and choose whichever is less
  - Shift and append from the appropriate array
- Concatenate any remaining elements from `array1` and `array2`
  - Note: One of them will be empty
- Return `merged`

# IMPLEMENTATION DETAILS

- Can use JS comparison operators: </> operator properly on both #s & strings
