// Scrambles the letters of each word for a guessing game
function scramble(word) {
  const letters = word.split("");
  for (let i = letters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [letters[i], letters[j]] = [letters[j], letters[i]];
  }
  return letters.join("");
}

["github", "commit", "branch", "merge"].forEach((word) =>
  console.log(`${scramble(word)}  (answer: ${word})`)
);