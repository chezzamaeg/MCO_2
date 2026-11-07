const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function analyze(text) {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const sentences = text.split(/[.!?]+/).filter((s) => s.trim().length > 0);
  return {
    words: words.length,
    characters: text.length,
    sentences: sentences.length,
  };
}

rl.question("Enter some text: ", (input) => {
  const result = analyze(input);
  console.log(`Words: ${result.words}`);
  console.log(`Characters: ${result.characters}`);
  console.log(`Sentences: ${result.sentences}`);
  rl.close();
});