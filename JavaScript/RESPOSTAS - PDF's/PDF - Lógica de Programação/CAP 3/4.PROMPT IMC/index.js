var peso;
var altura;
var imc1; 
var imc2;

function calculadora1(p, h) {
     imc = Math.round(p/(h**2));
     return imc;
}

function calculadora2(p, h) {
     imc = (p/(h**2)).toFixed(2);
     return imc;
}

function mostra(frase) {
     document.write(frase+'<br><br>');
}

peso = prompt('Qual seu peso?');
altura = prompt('Qual sua altura?');
imc2 = calculadora2(peso, altura);
imc1 = calculadora1(peso, altura);

mostra('Seu IMC é: '+imc2+' (aproximadamente '+imc1+')');