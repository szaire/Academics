let salario = parseFloat(prompt());

if (salario > 2000) {
     let imposto = salario*0.3;
     let saldo = salario - imposto;
     document.write(`O imposo pago foi de ${imposto}. O salário final é de: ${saldo}`);
}
else {
     let imposto = salario*0.2;
     let saldo = salario - imposto;
     document.write(`O imposo pago foi de ${imposto}. O salário final é de: ${saldo}`);
}