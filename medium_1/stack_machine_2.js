// Stack Machine Interpretation (Version 2)

function minilang(program) {
  const stack = [];
  let register = 0;

  const ERROR_MESSAGES = {
    emptyStack: 'Invalid pop operation; the stack is empty.',
    invalidToken: 'Invalid token provided to the program.',
  };

  const popStack = () => {
    if (stack.length === 0) throw ERROR_MESSAGES['emptyStack'];
    return stack.pop();
  };

  const operations = {
    push() {
      stack.push(register);
    },
    pop() {
      register = popStack();
    },
    print() {
      console.log(register);
    },
    add() {
      register += popStack();
    },
    sub() {
      register -= popStack();
    },
    mult() {
      register *= popStack();
    },
    div() {
      register = Math.floor(register / popStack());
    },
    remainder() {
      register = Math.floor(register % popStack());
    },
  };

  const executeProgram = () => {
    const tokens = program.split(' ');

    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index];

      if (/\d+/.test(token)) {
        register = parseInt(token, 10);
      } else if (!isCommand(token)) {
        throw ERROR_MESSAGES['invalidToken'];
      } else {
        processToken(token);
      }
    }
  };

  const isCommand = (token) =>
    Object.keys(operations).includes(token.toLowerCase());

  const processToken = (token) => {
    if (/\d+/.test(token)) {
      operations.setRegister(parseInt(token, 10));
    } else {
      operations[token.toLowerCase()]();
    }
  };

  try {
    executeProgram();
  } catch (error) {
    return error;
  }
}

minilang('PRINT');
// 0
// 0 is in register -> prints 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

/*
Tracing program:
Register; Stack
0; []
3; []
3; [3]
4; [3]
4; [3, 4]
5; [3, 4]
5; [3, 4, 5]
Output 5
10; [3, 4]
Output 10
4; [3]
Output 4
7; []
Output 7

*/

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

console.log(minilang('6 PUSH')); // Returns undefined
// (nothing is printed because the `program` argument has no `PRINT` commands)

// Error Handling

console.log(minilang('POP')); // Empty stack message
console.log(minilang('6 PUSH ADD SUB DIV PRINT')); // Empty stack message

console.log(minilang('-3 PUSH 5 SUBTRACT PRINT')); // Invalid token message
