const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculateBMI(weightKg, heightM) {
  return weightKg / (heightM * heightM);
}

function category(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
}

rl.question("Weight in kg: ", (w) => {
  rl.question("Height in meters (e.g. 1.75): ", (h) => {
    const weight = parseFloat(w);
    const height = parseFloat(h);

    if (Number.isNaN(weight) || Number.isNaN(height) || weight <= 0 || height <= 0) {
      console.log("Please enter valid positive numbers.");
    } else {
      const bmi = calculateBMI(weight, height);
      console.log(`Your BMI is ${bmi.toFixed(1)} (${category(bmi)}).`);
    }
    rl.close();
  });
})