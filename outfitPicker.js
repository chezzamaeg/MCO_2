// Suggests what to wear based on the temperature in Celsius
function pickOutfit(temp) {
  if (temp < 5) return "Heavy coat and scarf";
  if (temp < 15) return "Jacket and jeans";
  if (temp < 25) return "T-shirt and light pants";
  return "Shorts and sunglasses";
}

[-2, 10, 20, 32].forEach((t) => console.log(`${t}°C -> ${pickOutfit(t)}`));