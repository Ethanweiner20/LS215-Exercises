# Caesar Cipher

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: `plaintext` and a `key`
- **Output**: The `plaintext` encrypted using the caesar cipher (`ciphertext`)
- **Definitions and Rules**:
  - Shift each character in `plaintext` right by `key`
  - Wraps around alphabet if necessary
  - Encryt letters only; other characters are left as is
  - Must handle both upper/lower case (case-sensitive)

_Questions_:

- Do I need to handle non-string inputs?
- What about empty string inputs?
- Can `key` be negative? (assumption: no)

_Edge Cases_:

- Empty string
- Non-letters included
- Both upper/lowercase
- Key of zero

# EXAMPLES/TESTS

Separate sheet

# IDEAS

- Use String.prototype.replace w/ map function for easy replacement
- Use remainder operation for wrapping
- High-level Model: Use array of alphabet. For each character in string, retrieve its index in the array of characters. Sum this index and the key, and take the remainder when dividing by the length of the alphabet (26). This normalizes the new index, taking care of wrapping. Then retrieve the new value from the alphabet using the index.

# DATA STRUCTURES

- **Input**: Represent input as string (##String.prototye.replace)
- **Rules**:
  - Represent alphabet using an array

# ALGORITHM

**Description**: See above

Create an `ALPHABET` constant set to array of alphabet: `['A'...'Z']`

Given `plaintext`:

- Replace every character in `plaintext` globally, capturing the `match`:
  - If the `match` is a letter, transform it using the `key`
  - Otherwise, return the `match` as is
- Return the replaced string

## Transform a letter (Caesar Cipher)

Given a `letter`:

- Determine the proper `shift` value of the `letter`
- Find the `alphabetIndex` of the `letter` by subtracting the `shift` from the ASCII value of `letter`
- Determine the `newAlphabetIndex`: `(alphabetIndex + key) % ALPHABET.length`
- Determine the new ASCII index by adding the `shift` back to the `newAlphabetIndex`
- Find the `ASCII` value associated with new ASCII index

# IMPLEMENTATION DETAILS

- Letter -> ASCII: `String.prototype.charCodeAt`
- ASCII -> Letter: `String.fromCharCode`
