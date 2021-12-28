let num = lines.shift();
let parts = num.split(' ');

let a = parseFloat(parts[0]);
let b = parseFloat(parts[1]);
let c = parseFloat(parts[2]);

if (a > b && a > c) {
     console.log(a+' é o maior');
}
else if (b > a && b > c) {
     console.log(b+' é o maior');
}
else if (c > a && c > b) {
     console.log(c+' é o maior');
}
else {
     console.log('Nenhum valor se sobresai ao outro');
}