# Now I Know My ABCs

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A `word` string
- **Output**: A Boolean indicating whether `word` can be spelt using set of blocks
- **Definitions and Rules**:
  - Each block can be used only once when spelling `word`
  - `word` should be spelt case-insensitively

_Questions_:

- Can empty strings be input? (assumption: yes)
- Should we handle non-strings (assumption: no)
- Can we assume that the input word only consists of letters (assumption: yes)
- Do we need to be able to handle different sets of letter blocks?
- Can we assume that the blocks contain all 26 letters?

_Edge Cases_:

- Empty string -> true
- 1 letter word -> true
- Word has repeat letter(s) -> false

# EXAMPLES/TESTS

```js
isBlockWord('BATCH'); // true
isBlockWord('BUTCH'); // false
isBlockWord('jest'); // true
isBlockWord('an'); // false

// Different cases
isBlockWord('BatCH'); // true
isBlockWord('ButCH'); // false

// Edge cases
isBlockWord('butt'); // false
isBlockWord(''); // true
isBlockWord('A'); // true
```

# IDEAS

- Mutation of blocks data structure (copy + delete blocks as used)
- Create a data structure collecting blocks used so far

# DATA STRUCTURES

- **Input**: Represent `word` as array of characters (iteration)?
  - Iterate w/ `for` loop over the string
- **Rules**:
  - Array of 2-element subarrays
  - Object/hash ({ B: O, X: K }) -- no key-value relationship XXX
  - Array of Regexes

# ALGORITHM 1

**Description**: Copy the array of blocks. Iterate over the characters in `word`. If the character is in any of the blocks -> delete block and continue. If the characrter cannot be found -> return false.

Initialize a constant `BLOCKS` to a 2-element array of the blocks:

- `[['B', 'O']...['Z', 'M']]

Given a `word` string:

- Create a shallow copy of `BLOCKS` (##spread syntax)
- Transform `word` to uppercase (#toUpperCase) and extract characters:
- Iterate over characters:
  - Search for the block with the current character (##findIndex) ##
  - If a block is found:
    - Splice the block at the index found
  - Otherwise, return `false`
- Return `true`

## Search for a block that includes a character

Given an array of `blocks` and a `character`:

- Return the index of the block in `blocks` which (##findIndex):
  - Includes the `character`

# ALGORITHM 2: Regex

**Description**: Create an array of RegExps representing the blocks. For each RegExp, check if there is more than one match. If so, return false; otherwise, return true.

# IMPLEMENTATION DETAILS

- `findIndex` to find the index which we want to delete
- `splice` for deletion
