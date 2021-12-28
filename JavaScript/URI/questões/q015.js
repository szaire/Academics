let x1 = parseFloat(lines.shift());
let x2 = parseFloat(lines.shift());
let y1 = parseFloat(lines.shift());
let y2 = parseFloat(lines.shift());
let distance = Math.pow(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2), (1/2));
console.log(distance.toFixed(4));