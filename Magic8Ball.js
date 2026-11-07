// Ask a question, get a random answer
const answers = [
  "Yes, definitely!",
  "Ask again later.",
  "Not a chance.",
  "Signs point to yes.",
  "Better not tell you now.",
  "Very doubtful.",
];

const question = process.argv[2] || "Is my future bright?";
const answer = answers[Math.floor(Math.random() * answers.length)];

console.log(`Q: ${question}`);
console.log(`A: ${answer}`);
