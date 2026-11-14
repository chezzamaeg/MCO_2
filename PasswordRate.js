// Rates how strong a password is
function rate(password) {
  let score = 0;
  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  return ["Very weak", "Weak", "Okay", "Strong", "Very strong"][score];
}

["abc", "password1", "Hello123", "G!tHub#2026"].forEach((p) =>
  console.log(`${p} -> ${rate(p)}`)
);