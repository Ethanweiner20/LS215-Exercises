# 1000 Lights

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: Total number of `switches`
- **Output**: Array of lights that are on after n = `switches` repretitions
- **Definitions and Rules**:
  - The total number of repetitions = total number of `switches`
  - Lights are initially off
  - On a given `repetition`:
    - You toggle all the switches that are a multiple of `repetition`
    - e.g. repetition = 1 -> all switches
    - e.g. repetition = 2 -> 2, 4, 6...
    - e.g. repetition = 3 -> 3, 6, 9...

_Questions_:

- Can we assume that the input `switches` is a non-negative integer?
- How to handle a case where switches = 0?

_Edge Cases_:

- 0 switches -> empty array
- 1 switch -> 1 switch on

# EXAMPLES/TESTS

```js
lightsOn(5); // [1, 4]
// Original: 1 X, 2 X, 3 X, 4 X, 5 X
// 1st: 1, 2, 3, 4, 5
// 2nd: 1, 2 X, 3, 4 X, 5
// 3rd: 1, 2 X, 3 X, 4 X, 5
// 4th: 1, 2 X, 3 X, 4, 5
// 5th: 1, 2 X, 3 X, 4, 5 X -> [1, 4]
```

# IDEAS

- Store lights in array or object?
  - object -> on/off
  - array -> off-by-one problem
- Procedular: Create an object w/ all switches originally off. Perform n repetitions; toggle keys basedc on current repetition
- Mathematical: Build list of squares up to input # of switches
  - **Why?**: The squares are the only ones that are toggled an odd # of times; all others are toggled even # of times
  - e.g. 4: 1 -> on, 2 -> off, 3 -> on
  - e.g. 9: 1 -> on, 3 -> off, 9 -> on
  - e.g. 16: 1 -> on, 2 -> off, 4 -> on, 8 -> off, 9 -> on
  - e.g. 36: 1 -> on, 2 -> off, 3 -> on, 4 -> off, 6 -> on, 9 -> of, 12 -> on, 18 -> off, 36 -> on
  - A given switch `a` is toggled only and always on repetitions `n` which are a factor of `a`: `a = nx`. `a` must be toggled an odd number of times for it to be on at the end. Only square numbers have an odd number of factors, because one of the factors does not have a corresponding pair (it is the factor itself). Therefore, if the number of repetitions `n` >= `a`, `a` is toggled on every repitition which is a factor of `a`. So `a` is on. Note that the number of repetitions `n` is always greater than or equal to each light `a`. Non-square numbered lights will always be switched an even # of times, because they too are switched on repetition numbers which are a factor of it. They always have an odd number of factors, because each of its factors must have a corresponding second factor.

# DATA STRUCTURES

- **Input**: Represent `lights` with an object
- **Output**: Convert object -> array
- **Mathematical**: Use an array to collect squares <= switches

# ALGORITHM 1

Given a number of `switches`:

- Create an empty object containing all `lights` numbered 1 to `switches`, all set to `false`##
- Iterate from `1` to `switches`, tracking each `repetition`:
  - Toggle all `lights` which are a multiple of `repetition`##
- Filter the entries of `lights` which are on (`true`)
- Transform entries to array of lights and return

## Toggle lights which are multiple of current repetition

DESTRUCTIVE:

Given the `lights` and a `factor`:

- Iterate over the `lights`:
  - If the current light is divisible by `factor`:
    - Toggle it

# ALGORITHM 2

**Description**: Return all perfect squares that are less than or equal to `switches`

[1 * 1, 2 * 2, 3 * 3,...] | <= `switches`

Given a number of `switches`:

- Initialize an empty array of `lights`
- Set a `number` to `1`
- Loop until `number * number > switches`:
  - Append `number * number` to `lights`
  - Increment `number`
- Return `lights`

# IMPLEMENTATION DETAILS
