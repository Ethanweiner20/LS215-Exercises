# Stack Machine Interpretation

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A valid string `program`
  - All tokens are known
  - Program will not try to perform illegal operations
- **Output**:
  - Any output from printed from the `program`
  - Return value is unimportant
- **Definitions and Rules**:
  - Division & remainder operations => Integers
  - Initial values:
    - Stack = Empty array
    - Register = 0

_Questions_:

- Can we assume all tokens are either digits or uppercase?

_Edge Cases_:

- Printing initial value (0)
- No print operations -> no output

# EXAMPLES/TESTS

Separate sheet

# IDEAS

- Iterate through tokens -> run command based on token
- Represent stack and register as an object -> pass around / mutate
  - Or use functional programming?
- Direct mutation is probably easier
- Idea: store operations in an object

# DATA STRUCTURES

- **Input**: Represent program as array of string tokens
- **Rules**:
  - Use an object to store the stack and register (allows for dynamic updating)
  - Store operations in object -> accessible by string

# ALGORITHM

**Description**: Iterate over the tokens. Perform the appropriate operation as specified by the token, mutating the object as necessary.

Given a `program`:

- Setup a `stack` and `register`
- Create an object of `operations`
- Split the `program` into `tokens`
- For each `token`, run the command
  - If `token` is a digit -> invoke `setRegister`
  - Otherwise, use the lowercase string of the `token` to invoke the correct operation

## Object of operations

- Note: Methods defined on this object can access the `stack` and `register` via closure

Operations include:

- `setRegister(n)` (only operation requiring parameter)
- `push`
- `add`, `sub`, `mult`, `div`, `remainder`, `pop`, `print`

# IMPLEMENTATION DETAILS

- Any way to invoke method by string name?

# FURTHER EXPLORATION

Error Handling:

- Report empty stack conditions
  - Idea: Implement custom `pop` that logs error if stack is empty
- Invalid tokens
  - Modify `runOperation` function

Return value:

- Errors: Return error message (halt program)
- Entire program -> undefiend
