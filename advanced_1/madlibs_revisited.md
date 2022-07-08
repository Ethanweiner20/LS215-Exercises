# Madlibs Revisited

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A text `template`, structured in a particular way
  - e.g. 'The <adjective> brown cat'?
- **Output**: A string with the placeholders in `template` filled in w/ randomized words. Each placeholder must be replaced with a word of the appropriate word type.
- **Definitions and Rules**:
  - The replacement words can be hardcoded into the program
  - the output string should not contain quotes surrounding the replacement words.

_Questions_:

- Must the `template` itself be a string?

_Edge Cases_:

- Empty string

# EXAMPLES/TESTS

Separate file

# IDEAS

- Use the strings associated with the word type in the template (e.g. "noun")

# DATA STRUCTURES

- **Input**: Keep `template` as string to use for replacement (RegEx)
- **Rules**: Represent the replacement texts as an object the matches word types with example word

# ALGORITHM

**Description**: Replace any strings in template surrounded by carets. Capture the word type contained by the <>. Choose a randomized word for replacement.

Given a `template`:

- Replace the template globally, matching any words surrounded by carets:
  - Capture the word type
  - Choose a random element from the replacement words of the appropriate word type

## Choose random word of word type

Given a `wordType`:

- Index into the replacement words at the `wordType`
- Sample from the array
  - Generate a random integer between 0 and the length (inclusive 0, exclusive length) (`Math.random`)
  - Index into the array at that integer

# IMPLEMENTATION DETAILS

- `Math.random`?
