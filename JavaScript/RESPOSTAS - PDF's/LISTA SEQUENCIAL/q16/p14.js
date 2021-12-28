let salario = parseFloat(prompt('Salário:'));
let conta1 = parseFloat(prompt('Valor da primeira conta:'));
let conta2 = parseFloat(prompt('Valora da segunda conta:'));
let multa1 = conta1*0.02;
let multa2 = conta2*0.02;
var restante = salario - (conta1 + conta2) - (multa1 + multa2)
document.write('O resto é: ' + restante);