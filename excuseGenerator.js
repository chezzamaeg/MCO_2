// Generates a random excuse for being late
const reasons = ["my cat", "a rogue squirrel", "my alarm clock", "a traffic jam", "my WiFi"];
const problems = ["unplugged my phone", "hid my keys", "ate my homework", "stole my coffee", "froze my laptop"];

const pick = (list) => list[Math.floor(Math.random() * list.length)];

console.log(`Sorry I'm late, ${pick(reasons)} ${pick(problems)}!`);