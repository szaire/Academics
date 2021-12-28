const pi = 3.14159;
let R = parseFloat(lines.shift());
let Area = ((4.0/3)*pi*Math.pow(R, 3));

console.log(`VOLUME = ${Area.toFixed(3)}`);