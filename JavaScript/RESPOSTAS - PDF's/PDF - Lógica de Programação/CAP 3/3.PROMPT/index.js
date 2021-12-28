var nome = prompt('Bom dia, qual seu nome?');
var idade = prompt('Qual a sua idade?')

function mostra(frase) {
     document.write(frase + "<br><hr><br>");
}

mostra("Bom dia, " + nome); 
mostra("Sr(a), " + nome + ", você tem " + idade + " anos")