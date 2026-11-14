// Hangman-style display: reveals letters you have guessed
const word = "javascript";
const guessed = ["a", "s", "t", "j"];

const display = word
  .split("")
  .map((ch) => (guessed.includes(ch) ? ch : "_"))
  .join(" ");

console.log(display);
console.log(`Guessed: ${guessed.join(", ")}`);
console.log(`Letters left: ${display.split(" ").filter((c) => c === "_").length}`);