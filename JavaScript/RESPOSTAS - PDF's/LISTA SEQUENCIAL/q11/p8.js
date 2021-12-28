let salario = parseFloat(prompt('Digite aqui o salário:'));
let grat = salario*(5/100);
let impost = salario*(7/100);
let salarioFinal1 = salario - salario*(2/100);
let salarioFinal2 = (salario + grat) - impost;

document.write('Seu salario final é: '+salarioFinal1+'<br><br>');
document.write('Seu salario final é: '+salarioFinal2);