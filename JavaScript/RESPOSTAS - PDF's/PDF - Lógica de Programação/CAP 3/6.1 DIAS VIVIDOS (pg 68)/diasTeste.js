function calculaDiasVividos(i) {
     let dias = i * 365; // O javascript permite declarar variável sem o tipo primitivo
     return dias;
}

function calculaBatimentos() {
     let batimentos = calculaDiasVividos(idade)*24*60*80; // O javascript permite declarar variável sem o tipo primitivo
     return batimentos;
} 

function mostra(frase,info) {
     document.write(frase+info+'<br><br>');
}

let nome = prompt('Digite um nome');
let idade = parseInt(prompt('Digite a idade'));
let diasVividos = calculaDiasVividos(idade);
let batimentosVida = calculaBatimentos();

mostra(`A quantidade de dias que ${nome} viveu foi de: `,diasVividos);
mostra(`A quantidade de batimentos de ${nome} em vida foi de: `,batimentosVida);