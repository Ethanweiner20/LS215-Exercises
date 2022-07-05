# Molecules

The built-in object `arguments`, accessed on line 14, is not an array object. It does not natively have access to the `forEach` method. To use `arguments` as if it were an array, we can copy it using the `Array.prototype.slice` method. Or, we can iterate over it using a `for` loop.

Better yet, we can use a rest parameter to capture the parameters in an array form.
