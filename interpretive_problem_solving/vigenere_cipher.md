# Vigenere Cipher

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A string of `plaintext` and a `keyword`
- **Output**: The `plaintext` encrypted according to the Vigenere Cipher
- **Definitions and Rules**:
  - `keyword` defines encryption mechanism
  - Each letter in `plaintext` is associated with a particular character in `keyword`
  - `A` shifts by 0, `B` shifts by 1, `C` shifts by 2... `Z` shifts by 25
  - Non-letters do not affect the encryption
  - Case of `keyword` is unimportant: Should work the same for upper/lowercase
  - Case should be retained from `plaintext` -> `ciphertext`

_Questions_:

- Can we assume the `keyword` will be a non-empty string?
  - If not, how to handle empty string / non-strings?
  - Can the `keword` contain non-letters? (assumption: no)
- Can we assume that `plaintext` will be a string?

_Edge Cases_:

- `keyword` is longer than the `plaintext` X
  - Use first part of `keyword` only
- Case of the `keyword` is inconsistent X
- The `keyword` is empty? (assumption: can't happen)
- The `keyword` is one character long X
- The `plaintext` contains non-alphabetic characters X
- The `plaintext` is empty X
- The `plaintext` is not evenly divisibly into keyword-sized chunks
- No change

# EXAMPLES/TESTS

Separate file

# IDEAS

- Map the `plaintext` characters to appropriate keys first ->
- Apply Caesar Cipher to each letter?
- Array of index:characters (A-Z) == shift amounts:characters

# DATA STRUCTURES

- **Input**:
  - Represent `plaintext` as string -> transform w/ `replace`
  - Chain together the `keyword` into a longer string (of length of letters in `plaintext`?)
    - This wouldn't map nicely to iteration over `plaintext` characters...
    - Instead, increment an index to traverse over the keyword + use modulus when dividing by keyword's length
- **Rules**:
  - Represent the alphabet as a string
    - Retrieve `indexOf` alphabet letters to determine appropriate shift

# ALGORITHM

**Description**: Replace characters in `plaintext`. If character is a letter, index into the keyword (using remainder/modulus), determine the letter shift value using the `ALPHABET` and shift the letter in `plaintext` accordingly. Increment the index. If the character isn't a letter, don't modify it. Pay attention to case throughout.

Create an `ALPHABET` string: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

Given `plaintext` and a `keyword`:

- Initialize a `letterIndex` to `-1`
- Replace characters in `plaintext`:
  - If character is not a letter -> return character
  - Increment the `letterIndex`
  - Encrypt the letter

## Encrypt the letter

Given a `letter`, `keyword`, and `letterIndex`

- Index into the `keyword` using `letterIndex % keyword.length`
- Using the current keyword character and the `ALPHABET`, determine the `key` (shift amount) ##
- Shift the character by `key`, retaining the case of the letter (##`letterCase = case of character`) ##
- Return the new string

## Convert letter -> key

Given a `letter` (upper/lowercase):

- Convert `letter` to uppercase
- Find the index of the uppercase `ALPHABET` at `letter`
- Return that index (represents shift)

# IMPLEMENTATION DETAILS

- `String.prototype.replace`
- Use `letterShift` from caesar cipher
- Retain case of letter
- Use `indexOf`
