# Range

The invocation of `range` on line 12 is self-referential: it recursively calls the `range` function whose body it sits inside. It does not invoke the previously declared `range` function defined on lines 1-9. Since the function on line 11 has no base condition, it repeatedly invokes itself until it overflows the call stack.

```js
function range(start, end) {
  if (arguments.length === 1) {
    end = start;
    start = 0;
  }

  const range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

// Examples

console.log(range(10, 20));
console.log(range(5));
```

## Further Exploration

1. Both `start` and `end` are initialized to `0`, because `start` is reassigned before `end` is assigned to `start`.
2. The `if` block will execute if `end` is `0`, because `0` is falsy: thus, `start` will be reassigned to `0` whenever `end` is `0`, which is undesired behavior.
