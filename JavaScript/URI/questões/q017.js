let spentTime = parseInt(lines.shift());
let speed = parseInt(lines.shift());
let distance = spentTime * speed;
let fuel = distance / 12;

console.log(fuel.toFixed(3));