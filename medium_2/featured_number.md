# Featured Number

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An integer `n`
- **Output**: The first number greater than `n` that is a "featured number", or an error message
- **Definitions and Rules**:
  - **Featured Number**: Odd, multiple of `7`, digits occur once
  - Largest possible feature # is `9876543201`

_Questions_:

- Can the integer argument be negative? (assumption: yes)

_Edge Cases_:

- Argument is a featured # X
- Argument is one less than featured # X
- Argument is negative
- Argument is greater than max featured #

# EXAMPLES/TESTS

Separate file

# IDEAS

- Potential trick: Only increment over odd multiples of 7 -> increment by 14 (no #s in between could be a featured #)
- Determine 1st odd multiple of 7 > featured # -> increment by 14 from there
  - Optimization purposes
  - Only need to check digits are unique from there

# ALGORITHM

Given an integer `startingNumber`:

- If the number is greater than `startingNumber` -> return error message
- Iterate from the next odd multiple of 7 greater than `startingNumber` (##) up to the largest possible featured number (inclusive), incrementing by 14
  - If the number has unique digits -> Return number ##

## Find next odd multiple of 7

Given a `lowerBound`:

- Iterate until `lowerBound` is divisible by 7 AND odd
  - **Note**: Odd means: `n % 2 === 1 OR -1`

## Determine whether digits are unique

Given a `number`:

- Convert number to a `numberString`
- Intialize an empty string `digitsSoFar`
- Iterate over `numberString`:
  - If the `digitsSoFar` already includes the current number -> return false
  - Add character to `digitsSoFar`
- Return true

# IMPLEMENTATION DETAILS

- Use sets for determining uniqueness?
  - Might be too slow...
