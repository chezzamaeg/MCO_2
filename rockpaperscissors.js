const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const choices = ["rock", "paper", "scissors"];
const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
let wins = 0;
let losses = 0;
let ties = 0;

function play() {
  rl.question("\nRock, paper, or scissors? (q to quit): ", (answer) => {
    const player = answer.trim().toLowerCase();

    if (player === "q") {
      console.log(`Final score - Wins: ${wins}, Losses: ${losses}, Ties: ${ties}`);
      rl.close();
      return;
    }

    if (!choices.includes(player)) {
      console.log("Invalid choice.");
      return play();
    }

    const computer = choices[Math.floor(Math.random() * 3)];
    console.log(`Computer chose ${computer}.`);

    if (player === computer) {
      ties++;
      console.log("It's a tie!");
    } else if (beats[player] === computer) {
      wins++;
      console.log("You win!");
    } else {
      losses++;
      console.log("You lose!");
    }
    play();
  });
}

play();