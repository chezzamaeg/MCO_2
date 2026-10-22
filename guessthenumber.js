const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("I'm thinking of a number between 1 and 100.");

function ask() {
  rl.question("Your guess: ", (answer) => {
    const guess = parseInt(answer, 10);

    if (Number.isNaN(guess)) {
      console.log("Please enter a whole number.");
      return ask();
    }

    attempts++;
    if (guess < secret) {
      console.log("Too low!");
      ask();
    } else if (guess > secret) {
      console.log("Too high!");
      ask();
    } else {
      console.log(`Correct! You got it in ${attempts} attempts.`);
      rl.close();
    }
  });
}

ask();