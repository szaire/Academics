let num1 = parseFloat(prompt('Digite o primeiro numero:'));
let num2 = parseFloat(prompt('Digite o segundo numero:'));
let num3 = parseFloat(prompt('Digite o terceiro numero:'));
let peso1 = parseInt(prompt('Digite o primeiro peso:'));
let peso2 = parseInt(prompt('Digite o segundo peso:'));
let peso3 = parseInt(prompt('Digite o terceiro peso:'));
let mediaPond = (((num1*peso1)+(num2*peso2)+(num2*peso2))/(peso1+peso2+peso3)).toFixed(2);

document.write('Sua média ponderada é: '+mediaPond);