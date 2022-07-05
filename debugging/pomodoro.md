# Pomodoro Technique

The declaration of `minutes` on line 34 is effectively hoisted to the top of the `pomodoro` function definition. Since it is declared using `var`, `minutes` evaluates to `undefined` until it is declared during the execution phase on line 34. Line 9, therefore, will always evaluate to `false` because the expression `minutes < 25` evaluates as `undefined < 25`, which evaluates through implicit coercion as `'undefined' < '25'`. Since 'u' is greater than '2' in Unicode, the expression evaluates to `false`. Thus the block of the `while` loop is never executed, and the `minutes` are never output.

To fix this, instead of declaring a new variable `minutes` in `pomodoro`, the outer local variable `minutes` should simply be reassigned.
