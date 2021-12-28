function calculaDiasVividos(i) {
     let dias = i * 365;
     return dias;
}

function calculaBatimentos(dias) {
     let batimentos = dias * 24 * 60 * 80;
     return batimentos;
} 

function mostra(frase,info) {
     document.write(frase+info+'<br><br>');
}

let nome = prompt('Digite um nome');
let idade = parseInt(prompt('Digite a idade'));
let diasVividos = calculaDiasVividos(idade);
let batimentosVida = calculaBatimentos(idade);

mostra(`A quantidade de dias que ${nome} viveu foi de: `,diasVividos);
mostra(`A quantidade de batimentos de ${nome} em vida foi de: `,batimentosVida);