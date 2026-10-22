// Password Generator: create a random password of a chosen length.
// Run with: node password_generator.js
const crypto = require("crypto");
const readline = require("readline");

const CHARS =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";

function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += CHARS[crypto.randomInt(CHARS.length)];
  }
  return password;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Password length (8-64): ", (input) => {
  const length = parseInt(input, 10);

  if (Number.isNaN(length) || length < 8 || length > 64) {
    console.log("Please enter a number between 8 and 64.");
  } else {
    console.log(`Your password: ${generatePassword(length)}`);
  }
  rl.close();
});