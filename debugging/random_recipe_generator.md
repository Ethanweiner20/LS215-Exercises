# Random Recipe Generator

On line 44, `dishName` and `dish` are both strings. When the binary `+` operator is used on the array results of the calls to `random` on lines 41 and 42, the returned arrays are first converted to strings, which are concatenated. In JS, the binary `+` operator can not be used to concatenate arrays: it either adds numbers of concatenates strings. `String.prototype.join` is not a valid method name, so line 44 raises an error.
