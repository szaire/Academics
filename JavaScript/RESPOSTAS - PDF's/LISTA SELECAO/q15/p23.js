let salario = parseFloat(prompt());
let imposto;
let saldo;

if (salario > 2000) {
     imposto = salario*0.3;
     saldo = salario - imposto;
}
else {
     imposto = salario*0.2;
     saldo = salario - imposto;
}
document.write(`O imposto pago foi de ${imposto}. O salário final é de: ${saldo}`);