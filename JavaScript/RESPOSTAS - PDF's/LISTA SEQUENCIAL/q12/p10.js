let salario = parseInt(prompt('Digite o salário:'));
let vendas = parseInt(prompt('Digite o valor das vendas:'));
let com = (4/100) * vendas;
salario += com;

document.write(`O pagamento final é: R$ ${salario}<br>A comissão é de: R$ ${com}`);