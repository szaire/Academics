let salarioMin = parseFloat(prompt('Digite o salario mínimo:'));
let quantKw = parseFloat(prompt('Digite a quantidade de kw'));
let valorKw = parseFloat(0.20*salarioMin);
let consumoKw = quantKw * valorKw;
let pagamento = valorKw - valorKw*0.15;
document.write('Valor de kw: ' + valorKw + '<br>');
document.write('Consumo de kw: ' + consumoKw + '<br>');
document.write('Valor (com desconto) de kw: ' + pagamento + '<br>');