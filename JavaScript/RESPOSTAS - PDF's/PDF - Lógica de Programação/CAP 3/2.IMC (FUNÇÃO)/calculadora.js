var pPrimo = 83;
var hPrimo = 1.76;
var imcPrimo = Math.round(calculadora2(pPrimo, hPrimo));

function mostra(frase) {
     document.write(frase + "<br><br>")              
}

function calculadora1(p, h) {
     let imc = (p/(h**2)).toFixed(2);
     return imc;
}

function calculadora2(p, h) {
     let imc = p/(h**2);
     return imc;
}

function pl() {
     document.write("<br><br>")
}

mostra("o IMC do seu primo é: " + calculadora1(pPrimo, hPrimo));
mostra("o IMC está " + (calculadora1(pPrimo, hPrimo) - 18.5) + " pontos acima do limite de magreza");pl();

mostra("o IMC do seu primo é: " + imcPrimo);
mostra("o IMC está " + (imcPrimo - 18.5) + " pontos acima do limite de magreza");pl();

mostra("o IMC é " + calculadora1(pPrimo, hPrimo));
mostra("o IMC é " + imcPrimo);