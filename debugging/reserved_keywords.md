# Reserved Keywords

The return value of the callback passed to `forEach` is disregarded by `forEach`, and thus does not affect the return valu of `isReserved`. Two possible solutions are:

- Use a standard `for` loop to iterate over `RESERVED_KEYWORDS`. A `return` in the `for` loop will bubble up to the method in which the block passed to the for loop sits.
- Use an appropriate list abstraction: `Array.prototype.some` or `Array.prototype.includes`
