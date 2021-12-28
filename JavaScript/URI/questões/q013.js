let num = "1 2 3";
let parts = num.split(' ');

let a = parseFloat(parts[0]);
let b = parseFloat(parts[1]);
let c = parseFloat(parts[2]);

let MaiorABC = (a + b + c + Math.abs(a - b - c))/2;

console.log(MaiorABC+' é o maior');