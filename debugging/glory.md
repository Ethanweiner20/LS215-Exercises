# Glory!

The problem lies in the `switch...case` statement. Upon the first `case` condition evaluating to `true`, all the remaining `case` and `default` clauses are evaluated until a `break` is encountered. Since the `switch...case` statement on lines 37-41 includes no `break` keywords, when `result` is `1` or `20`, more than one clause is evaluated, and as such, more than one outcome is displayed.
