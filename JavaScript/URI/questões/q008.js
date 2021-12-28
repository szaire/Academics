let num = parseInt(lines.shift());
let salarioHora = parseInt(lines.shift());
let hora = parseFloat(lines.shift());
let salario = salarioHora * hora;

console.log('NUMBER = '+num);
console.log('SALARY = U$ '+salario.toFixed(2));