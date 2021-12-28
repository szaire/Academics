var pMeu = 75;
var hMeu = 1.72;
var imcMeu = calculadora(pMeu, hMeu);

function mostra(frase) {
     document.write(frase + "<br><br>")              
}
function calculadora(p, h) {
     imc = p/(h**2);
     return imc;
}

mostra("meu IMC é: " + imcMeu.toFixed(2));
mostra("meu IMC é: " + Math.round(imcMeu));