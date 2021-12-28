let nota = parseFloat(prompt(`Digite o valor`)); // lines.shift()
let parteInteira = parseInt(nota);
let parteDecimal = nota - parteInteira;

let parcela100 = parseInt(parteInteira / 100.00);
parteInteira -= parcela100 * 100.00;
let parcela50 = parseInt(parteInteira / 50.00);
parteInteira -= parcela50 * 50.00;
let parcela20 = parseInt(parteInteira / 20.00);
parteInteira -= parcela20 * 20.00;
let parcela10 = parseInt(parteInteira / 10.00);
parteInteira -= parcela10 * 10.00;
let parcela5 = parseInt(parteInteira / 5.00);
parteInteira -= parcela5 * 5.00;
let parcela2 = parseInt(parteInteira / 2.00);
parteInteira -= parcela2 * 2.00;

let parcela1 = parseInt(parteInteira / 1.00);
parteInteira -= parcela1 * 1.00;
let parcela05 = parseInt(parteDecimal / 0.50);
parteDecimal -= parcela05 * 0.50;
let parcela02 = parseInt(parteDecimal / 0.25); 
parteDecimal -= parcela02 * 0.25;
let parcela01 = parseInt(parteDecimal / 0.10);
parteDecimal -= parcela01 * 0.10;
let parcela005 = parseInt(parteDecimal / 0.05); 
parteDecimal -= parcela005 * 0.05;
let parcela001 = parseInt(parteDecimal / 0.01);
parteDecimal -= parcela001 * 0.01;

console.log(`NOTAS:`);
console.log(`${parcela100} nota(s) de R$ 100.00`);
console.log(`${parcela50} nota(s) de R$ 50.00`);
console.log(`${parcela20} nota(s) de R$ 20.00`);
console.log(`${parcela10} nota(s) de R$ 10.00`);
console.log(`${parcela5} nota(s) de R$ 5.00`);
console.log(`${parcela2} nota(s) de R$ 2.00`);
console.log(`MOEDAS:`);
console.log(`${parcela1} moeda(s) de R$ 1.00`);
console.log(`${parcela05} moeda(s) de R$ 0.50`);
console.log(`${parcela02} moeda(s) de R$ 0.25`);
console.log(`${parcela01} moeda(s) de R$ 0.10`);
console.log(`${parcela005} moeda(s) de R$ 0.05`);
console.log(`${parcela001} moeda(s) de R$ 0.01`);