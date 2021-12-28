let axes = prompt('Digite aqui 3 numeros:');
let Axes = axes.split(" ");

let A = parseFloat(Axes[0]);
let B = parseFloat(Axes[1]);
let C = parseFloat(Axes[2]);
const pi = 3.14159;

let areaTriangle = (A * C)/2;
let radiusCircle = pi*Math.pow(C, 2);
let areaTrap = ((A + B)*C)/2;
let areaSquare = B * B;
let areaRectan = A * B;

console.log(`TRIANGULO: ${areaTriangle.toFixed(3)}`);
console.log(`CIRCULO: ${radiusCircle.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrap.toFixed(3)}`);
console.log(`QUADRADO: ${areaSquare.toFixed(3)}`);
console.log(`RECTANGULO: ${areaRectan.toFixed(3)}`);