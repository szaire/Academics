// Operador lógico 'ou' (||)
// Retorna FALSE se os dois operadores forem FALSE
// Retorna TRUE se pelo menos um dos operadores forem TRUE 
console.log('true || true: ',true || true);
console.log('false || true: ',false || true);
console.log('true || false: ',true || false);
console.log('false || false: ',false || false);

var camisetaListrada = false;
var camisetaComBolso = true;
var camisetaEscolhida = camisetaListrada || camisetaComBolso;
console.log(camisetaEscolhida);