let salarioMin = parseFloat(prompt('Digite o salário mínimo:'));
let numHorasTrab = parseInt(prompt('Digite o número de horas trabalhadas:'));
let numHorasExtrasTrab = parseInt(prompt('Digite o número de horas extras trabalhadas:'));
let valorHorasTrab = (1/8) * salarioMin; 
let valorHorasExtras = (1/4) * salarioMin
let salarioBruto = numHorasTrab * valorHorasTrab;
let pagamentoHorasExtras = numHorasExtrasTrab * valorHorasExtras;
let salarioFinal = salarioBruto + pagamentoHorasExtras;
document.write(`Seu salário final é: R$ ${salarioFinal.toFixed(2)}`)

// DICA: cntrl + D substitui o nome de cada variável selecionada com o mesmo nome!