// Operador de Atribuição

function resetaValor() {
    valorProduto = 100; 
}

let valorProduto = 100; // o sinal de '=' atribui um tipo primitivo a uma variável
console.log('O valor original é: '+valorProduto); 

valorProduto += 50; // é a mesma coisa de escrever valorProduto = valorProduto + 50
console.log('soma: '+valorProduto);
resetaValor();

valorProduto -= 25; 
console.log('subtração: '+valorProduto);
resetaValor();

valorProduto *= 5; 
console.log('multiplicação: ' + valorProduto);
resetaValor();

valorProduto /= 5; 
console.log('divisão: '+valorProduto);
resetaValor();

valorProduto **= 2; 
console.log('exponenciação: '+valorProduto);