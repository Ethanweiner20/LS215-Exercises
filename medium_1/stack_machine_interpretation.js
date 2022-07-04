// Stack Machine Interpretation

function minilang(program) {
  const stack = [];
  let register = 0;

  const popTokens = ['POP', 'ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'];
  const validTokens = [...popTokens, 'PUSH', 'PRINT'];

  const ERROR_MESSAGES = {
    emptyStack: 'Invalid pop operation; the stack is empty.',
    invalidToken: 'Invalid token provided to the program.',
  };

  const operations = {
    setRegister(n) {
      register = n;
    },
    push() {
      stack.push(register);
    },
    pop() {
      register = stack.pop();
    },
    print() {
      console.log(register);
    },
    add() {
      register += stack.pop();
    },
    sub() {
      register -= stack.pop();
    },
    mult() {
      register *= stack.pop();
    },
    div() {
      register = Math.floor(register / stack.pop());
    },
    remainder() {
      register = Math.floor(register % stack.pop());
    },
  };

  const executeProgram = () => {
    const tokens = program.split(' ');

    for (let index = 0; index < tokens.length; index++) {
      const token = tokens[index];

      if (!validToken(token)) return ERROR_MESSAGES['invalidToken'];
      if (invalidPopOperation(token)) return ERROR_MESSAGES['emptyStack'];

      processToken(token);
    }
  };

  const validToken = (token) =>
    validTokens.includes(token) || /\d+/.test(token);

  const invalidPopOperation = (token) =>
    stack.length === 0 && popTokens.includes(token);

  const processToken = (token) => {
    if (/\d+/.test(token)) {
      operations.setRegister(parseInt(token, 10));
    } else {
      operations[token.toLowerCase()]();
    }
  };

  return executeProgram();
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
