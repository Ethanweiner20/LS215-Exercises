# Unlucky Days

# PROBLEM

_Requirements (Explicit, Implicit)_:

- **Input**: A full `year`, greather than `1752`
- **Output**: An integer representing the number of Friday the 13ths in that year
- **Definitions and Rules**:
  - Assume that same calendar will be in use in foreseeable future

_Questions_:

- Is the input year an integer?

_Edge Cases_:

- Year is `1753`
- Year w/ no Friday the 13ths?
- Year in the future

# EXAMPLES/TESTS

Separate file

# IDEAS

- Check if each month's 13th is a Friday
- Increment a counter for each month that passes

# DATA STRUCTURES

- Convert `year` into array of 12 dates
  - Each date: the 13th of the month on the given year

# ALGORITHM

Constants: `FRIDAY_INDEX` is `5`

Given a `year`:

- Expand the `year` into an array of 12 `13ths`##
- Count the number of `13ths` which are a Friday##

## Expand year -> array of 13ths

Given a `year`:

- Initialize an empty array of dates
- Iterate from 0 to 11, tracking the `month`:
  - Add a date to dates with the `year`, `month`, and day (`13`)
- Return array of dates

## Count Fridays

Given an array of `dates`:

- Reduce the `dates`:
  - Increment count if date is Friday
    - Check if the day number is `5` (represents Friday)

# IMPLEMENTATION DETAILS

- `new Date(year, monthIndex, day)`
- Day of the week: `Date.prototype.getDay`
