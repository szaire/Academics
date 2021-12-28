let horario = lines.shift().split(` `).map(x => parseInt(x));
let duracao = [];
duracao[0] = new Array (horario[0], horario[1]) // hora 1 // 7 8
duracao[1] = new Array (horario[2], horario[3]) // hora 2 / 9 10
let tempoInicial;
let tempoFinal;
let referenciaHora;
let referenciaMinuto;
let duracaoHora;
let duracaoMinuto;

tempoInicial = (60 * duracao[0][0]) + duracao[0][1]; // 50
tempoFinal = (60 * duracao[1][0]) + duracao[1][1]; // 64

if (tempoFinal > tempoInicial) {
      referenciaMinuto = Math.abs(tempoFinal - tempoInicial); //64 - 50 = 14
}
else {
      referenciaMinuto = (1440 + tempoFinal) - tempoInicial;
}
referenciaHora = referenciaMinuto / 60; // 14 / 60 = 0.23
duracaoHora = Math.trunc(referenciaHora); // 0.23
duracaoMinuto = (referenciaHora.toFixed - duracaoHora) * 60; // 

console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`);