// parseInt indica que o valor guardado será um número inteiro
// parseFloat indica que o valor guardado será um número com ponto flutuante (vírgula)

var a = parseInt(prompt ('valor 1'));
var b = parseInt(prompt ('valor 2'));
var x = a + b; //numero

function mostra(frase) {
     document.write(frase);
}

mostra('X = '+x); 
// IMPORTANTE!: nunca usar ',' em função 
// com a intenção de juntar strings e dados como em document.write!
// Caso o contrário, o código não funcionará pois ele estará tentando
// achar um parâmetro que não existe!
// ERRADO: mostra('X = ',x); 