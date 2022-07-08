// Madlibs Revisited

const replacementWords = {
  adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  noun: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
};

function madlibs(template) {
  return template.replace(/<(.+?)>/g, (_, wordType) =>
    randomWordOfType(wordType)
  );
}

function randomWordOfType(wordType) {
  const candidates = replacementWords[wordType];
  const randomIndex = Math.floor(Math.random() * candidates.length);
  return candidates[randomIndex];
}

const template1 =
  'The <adjective> brown <noun> <adverb> <verb> the <adjective> \
yellow <noun>, who <adverb> <verb> his <noun> and looks around.';

const template2 = "The <noun> <verb> the <noun>'s <noun>.";

console.log(madlibs(template1));
// The "sleepy" brown "cat" "noisily"
// "licks" the "sleepy" yellow
// "dog", who "lazily" "licks" his
// "tail" and looks around.

console.log(madlibs(template1));
// The "hungry" brown "cat" "lazily"
// "licks" the "noisy" yellow
// "dog", who "lazily" "licks" his
// "leg" and looks around.

console.log(madlibs(template2)); // The "fox" "bites" the "dog"'s "tail".

console.log(madlibs(template2)); // The "cat" "pats" the "cat"'s "head".

console.log(madlibs('')); // ''
