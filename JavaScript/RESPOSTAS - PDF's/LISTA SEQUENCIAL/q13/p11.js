let salarioMin = parseFloat(prompt('Digite o salário mínimo:')); // 1000
let numHoras = parseInt(prompt('Digite o número de horas trabalhadas:')); // 8

// Uma empresa: 
let horasTrab = salarioMin / 2.0; // 500
let salarioBruto = numHoras * horasTrab; // 8 * 500 = 4000
let imposto = salarioBruto * (3/100); // 120
let salarioFinal = salarioBruto - imposto; // 4000 - 120 = 3880 R$

document.write(`Seu salário é: R$ ${salarioFinal}.<br>`);
document.write("Seu salário é: R$ "+salarioFinal+'.'+"<br>");
document.write('Seu salário é: R$ '+salarioFinal+'.'+'<br>');