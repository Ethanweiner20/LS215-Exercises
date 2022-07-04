# Word to Digit

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: `sentence` string
- **Output**: The `sentence` with all number words converted to corresponding digit character
- **Definitions and Rules**:

_Questions_:

- Does case matter (assumption: no)

_Edge Cases_:

- No number words
- Empty string
- Only number words
- Two numbers in one word (e.g. `fivesix`)
- Number has period next to it
- Number is at end of string
- Number is not all lowercase

# EXAMPLES/TESTS

Separate file

# IDEAS

- Use Regex for replacement (periods stay)
- Split on spaces w/ punctuation but retain punctuation using capture group (best option?)
- Create array of number words + indexOf

# DATA STRUCTURES

- **Input**: Array of strings (including punctuation)
- **Rules**: Represent number words as array of strings

# ALGORITHM

## Declarative Algorithm

**Description**: Split sentence into words. Transform the words: if number word -> convert to number, otherwise, keep the same.

Initialize `numberWords` to an array: `['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']`

Given a `sentence`:

- Split into words
- Transform the words:
  - Create a `cleanedWord`: Remove any non-letters from the word and lowercase it (#replace)
  - Determine the index of the `cleanedWord` in `numbers`
  - If the index is -1 -> Return the original word
  - Otherwise, replace the part of the word containing letters and return (#replace)
    - _Note_: This retains punctuation
- Join the transformed words with spaces and return

## Regex Solution

Create a Regex pattern using `numberWords`. Using that pattern, replace all `numberWords` in the string. Ensure that the number word is surrounded by word boundaries.

# IMPLEMENTATION DETAILS
