# Word Ladder

The program raises a `TypeError` because of the missing semicolon on line 1. JS does not raise errors for missing semicolons, but when they are omitted, the JS interpreter will automatically insert them where it deems fit. In this case, no semicolon is inserted after the declaration of ladder on line 1, so the declaration really reads as:

`let ladder = ''['head', 'heal', 'teal', 'tell', 'tall', 'tail']`. This code attempts to index into the empty string with the array -- and since that array key does not exist on the string, `undefined` is returned, on which `forEach` is invoked.
