let salario = parseFloat(prompt('Digite aqui o salário:'));
let aumento = parseFloat(prompt('Digite o aumento desejado em %:'));
let novoSalario = salario*((aumento+100)/100);

document.write('O novo salario é: '+novoSalario);