# Letter Percentage Ratio

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A `string` containing at least one character
- **Output**: An object containing:
  - % lowercase
  - % uppercase
  - % neither
- **Definitions and Rules**:
  - %s should be fixed to two decimal places
  - Object values (%s) should be strings

_Questions_:

- Round up/down for decimal places?

_Edge Cases_:

- Contains whitespace
- One character string

# EXAMPLES/TESTS

Separate file

# IDEAS

- Reduction -> 3 counts, map -> 3 percentages?
- Reduction -> 3 percentages directly?
  - Won't work, need counts first

# DATA STRUCTURES

- **Input**: Represent string as array of characters (reduction)
- **Intermediate**: Object for tracking counts
- **Output**: Object mapped from counts -> percentages

# ALGORITHM 1

Given a `string`:

- Reduce the characters in the `string` to character counts##
- Transform character counts to character percentages

## Reduce chars -> counts

Given a `string`:

- Initialize an object with keys lowercase, uppercase, neither, values 0
- Reduce characters in `string`:
  - If lowercase (##Regex) -> Add to lowercase
  - If uppercase -> Add to upercase
  - Else -> Add to neither
- Return the counts object

## Transform counts -> %s

Given `letterCounts` and `totalCount`:

- Transform entries in `letterCounts` (Object.entries):
  - Determine the percentage (as a string) for that count ##
- Convert entries to object for percentages

## Convert count -> %

Given a `count` and `totalCount`:

- Divide count by totalCount, multiply by 100
- Fix % to 2 decimals (##toFixed)
- Return as string

# ALGORITHM 2

Match all characters -> divide by total counts to form the object.

# IMPLEMENTATION DETAILS
