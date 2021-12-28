let nome = prompt('Digite um nome');
let idade = parseInt(prompt('Digite a idade'));
let diasVividos = idade * 365;

function mostra(frase,Qdias) {
     document.write(frase+Qdias+'<br><br>');
}

mostra(`A quantidade de dias que ${nome} viveu foi de: `,diasVividos);
mostra(`A quantidade de batimentos de ${nome} foi de: `, diasVividos * 24 * 60 * 80);