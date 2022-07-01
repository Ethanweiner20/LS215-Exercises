# Diamonds

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: An odd integer grid width/length `n`
- **Output**: A four-pointed diamond that takes up an `n`x`n` grid
  - `n` rows
  - `n` columns
  - First and last row have 1 `*`
  - Middle row has `n` `*`s
- **Rules**:
  - `n` will always be odd integer
  - Each row will be a total of `n` characters wide

_Questions_:

- Can a negative integer be supplied (assume no)

_Edge Cases_:

- Integer `n` supplied is `1` (smallest integer)

# IDEAS

- Idea 1: Use arrays for rows
  - Create top: Increment a `rowCount` by `2` until it equals `n`
  - Create bottom: Repeat `*` `n` times
  - Create bottom: Reverse top
- Idea 2: Generate 2 arrays: left spacing, middle spacing -> iterate over arrays + produce output

# EXAMPLES/TESTS

Separate file

Hollow:

-
- -
- -
- -
- -

- -
- -
-     *
- -
- -
-

`n = 7 = 2(3) + 1`

Left padding: 3, 2, 1, 0, 1, 2, 3
Center spacing: 0, 1, 3, 5, 3, 1, 0

General rule:

- Left: [a, a - 1,... 1, 0, 1,... a - 1, a]
- Center: [0, 1, 3,... n - 2,... 3, 1, 0]

# DATA STRUCTURES

- Input: Integer
- Intermediate: Array of rows

## Hollow Diamonds

- Input: Odd integer `n = 2a + 1`
- Rules
  - Left padding: Array of integers
  - Center spacing: Array of integers

# ALGORITHM

Given a grid width `n`:

- Create the `top` ##
- Create the `middle` by repeating '\*' `n` times (##repeat)
- Create the `bottom` by reversing the top
- Log each row from `top`, `middle` and `bottom`##

## Create the top half of the diamond

Given a grid with `n`:

- Initialize a `rows` to an empty array
- Iterate from 1 to `n - 2` (inclusive), incrementing by `2` and tracking the current `starCount`:
  - Create a row with `starCount` and row width `n`
- Return the `rows`

## Create a row

Given a `starCount` and a `rowWidth`

- Repeat `*` `starCount` times to create the `stars`
- Pad the `stars` with spaces such that the entire row width is `n`
  - Determine the `padding` by substracting `starCount` from `rowWidth` and dividing by `2`
  - Add `padding` spaces on each side of `stars`
- Return resulting string

## Log each row

- Create an array of `rows` with `top`, `middle`, and `bottom` (spread each row)
- Iterate through the `rows` and log each

# ALGORITHM: Hollow Diamonds

General rule (`n` = `2a + 1`):

- Left: [a, a - 1,... 1, 0, 1,... a - 1, a]
- Center: [0, 1, 3,... n - 2,... 3, 1, 0]

Note: `a = (n - 1) / 2`

Given a grid width `n`:

- Generate an array for the `leftSpacing`##
- Generate an array for the `centerSpacing`##
- Iterate over the `leftSpacing` with the `index`:
  - Create a string consisting of:
    - `leftSpacing` at `index`
    - A star
    - `centerSpacing` at `index`
    - A star
  - Output the string

## Generate array for left spacing

Given a grid width `n`:

- Determine the `maxSpacing`: `(n - 1) / 2`
- Create a `spacing` array to contain integers
- Iterate from `maxSpacing` to `0`, adding integers to `spacing`
- Iterate from `1` to `maxSpacing`, adding integers to `spacing`
- Return `spacing`

## Generate array for center spacing

Given a grid width `n`:

- If `n < 3` -> Return `[0]`
- Create an `spacing` array containing `[0]`
- Iterate from `1` to `n - 2` (incrementing by `2`) adding integers to `spacing`
- Iterate from `n - 4` to `1` (decrementing by `2`), adding integers to `spacing`
- Add `0` to `spacing`
- Return `spacing`

# IMPLEMENTATION DETAILS

- `String.prototype.repeat` for repeating
- `center`?
- Use spread syntax for spreading the parts
