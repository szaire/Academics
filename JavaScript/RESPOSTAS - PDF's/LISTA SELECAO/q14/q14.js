let cod = parseInt(prompt('Digite aqui o código dos produtos:\n1. Hot-Dog - R$ 4,00\n2. X-salada - R$ 4,50\n3. X-bacon - R$ 5,00\n4. Torrada simples - R$ 2,00\n5. Refrigerante - R$ 1,50'));
let quant = parseInt(prompt('Digite a quantidade:'));
let priceUnit;
let nome;
let priceFinal;

if (cod == 1) {
     nome = 'Hot- Dog'
     priceUnit = 4.00;
}

else if (cod == 2) {
     nome = 'X-salada'
     priceUnit = 4.50;
}

else if (cod == 3) {
     nome = 'X-bacon'
     priceUnit = 5.00;
}

else if (cod == 4) {
     nome = 'Torrada simples'
     priceUnit = 2.00;
}

else if (cod == 5) {
     nome = 'Refrigerante'
     priceUnit = 1.50;
}

else {
     document.write(`Digite um código para um produto! (f5 para tentar novamente)`);
}

priceFinal = priceUnit * quant;

document.write(
     `O valor de ${nome} por unidade é: R$ ${priceUnit.toFixed(2)} <br>
     O valor da conta é: R$ ${priceFinal.toFixed(2)}`
     );