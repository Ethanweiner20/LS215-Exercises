# Binary Search

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An `array` and `searchItem`
- **Output**: The index of the `searchItem` if found, otherwise `-1`
- **Definitions and Rules**:
  - Use binary search to determine the index
  - The array argument will always be sorted
  - **Binary Search**:
    - Compare against middle element -> binary search half of list
    - Recursive algorithm is best?
  - Problem: Must remain context of entire array

_Questions_:

- Should the search be case-sentive for strings? (assumption: yes)
- Can the array contain mixed types?
- Can the array contain types other than strings/numbers?
- Duplicate elements?
- Can we assume search item is the same type as elements in the array?

_Edge Cases_:

- Input is empty array
- Repeated elements: Return the index of the first one

# EXAMPLES/TESTS

Separate file

# IDEAS

- Map to an object w/ indices first (high-level, probably makes most sense)
- Include a "shift index" to shift things appropriately whenever your lower bound increases
- Procedular: Just continually manipulate low/high indices

# DATA STRUCTURES

- **Input**: Split array into appropriate half to search

# ALGORITHM 1: Shifting the Lower Bound

**Description**: Find the item at the middle index of the given array. If it is equal to the search item -> return that index. Otherwise, binary search the appropriate half.

e.g. Middle Indexes

Length = 4 -> floor(4/2) -> 2
Length = 5 -> floor(5/2) -> 2

Given an `array` and `searchItem` and `shiftIndex`:

- Perform binary search on the `array`, using the whole `array` as the initial slice and a `shiftIndex` of `0`

## Binary Search

Given a `slice`, `shiftIndex`, and `searchItem`

- If length of the array is 0 -> return -1
- Determine the `middleIndex`: `Math.floor((high - low) / 2 + low)` plus the `low`
- Determine the `middleElement`: `array[middleIndex]`
- If `searchItem` is equal to `middleElement`, return `middleIndex + shiftIndex`
- If `searchItem` is less than `middleElement`, binary search 1st half of `array` (excludes `middleIndex`), using the same `shiftIndex`
- Otherwise, binary search 2nd half of `array` (starting from `middleIndex + 1`), using the `shiftIndex + middleIndex + 1`

# ALGORITHM 2: Procedular

Given an `array` and a `searchItem`

- Initialize a `low` index to `0`
- Initialize a `high` index to `array.length`
- Declare `middleIndex`

- Loop until `high - low` <= 0
  - Set a `middleIndex` to the floor of `(high - low) / 2`
  - If `searchItem` === middle element -> return `middleIndex`
  - If `searchItem` < middle element
    - Reassign `high` to `middleIndex`
  - Else:
    - Reassign `low` to `middleIndex + 1`
- If nothign was found, return `-1`

# IMPLEMENTATION DETAILS

- `Array.prototype.slice`
