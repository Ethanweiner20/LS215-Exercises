# Weekday Classes

The problem lies in the `toString` method: it parses the weekday of parameter `date` using `Date.prototype.getDay`. To form the proper date string, it must use the day of month instead (`Date.prototype.getDate`). Furthermore, `getYear` should be changed to `getFullYear` and the return value of `getMonth` should be incremented by `1` to get the proper string.

Alternatively, we could use a String method to format the date properly, instead of our custom `toString` method.

As of now, on line 45, whenever the expression `!calendar[dateStr]` is evaluated, it evaluates to `true` because the format of `dateStr` does not match any dates in `calendar`. Because of this, `isAvailable` returns `true` regardless of the input date, so every `classDate` for every class is considered to be available, and thus `className` is pushed to `compatibleClasses` on line 58 for every class except those which contain class dates in the past.
