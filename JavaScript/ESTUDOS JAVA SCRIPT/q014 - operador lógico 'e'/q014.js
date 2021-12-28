// Operador lógico 'e' (&&)
// Retorna TRUE se os dois operandos forem TRUE
// Retorna FALSE se pelo menos um dos operadores for FALSE
console.log('true && true: ',true && true);
console.log('false && true: ',false && true);
console.log('true && false: ',true && false);
console.log('false && false: ',false && false);

var maiorIdade = true;             
var carteiraDeTrabalho = true;     
var poderAplicar = maiorIdade && carteiraDeTrabalho;
console.log(poderAplicar == true ? 'Aplicação autorizada!' : 'Aplicação negada!');