// Countdown Timer: count down from a number of seconds.
// Run with: node countdown_timer.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function format(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");
  return `${mins}:${secs}`;
}

rl.question("Enter seconds to count down: ", (input) => {
  let seconds = parseInt(input, 10);
  rl.close();

  if (!(seconds > 0)) {
    console.log("Please enter a number greater than 0.");
    return;
  }

  const timer = setInterval(() => {
    process.stdout.write(`\r${format(seconds)}`);
    if (seconds === 0) {
      clearInterval(timer);
      console.log("\nTime's up!");
    }
    seconds--;
  }, 1000);
});