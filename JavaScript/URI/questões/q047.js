minutos = (min1, min2) => {
      if (min1 < min2) {
            duracaoMinuto = min2 - min1;
      }
      else if (min1 > min2) {
            duracaoMinuto = 60 - min1 - min2;
      }
      else {
            duracaoMinuto = 0;
      }
      return duracaoMinuto;
}

let horario = prompt().split(` `).map(x => parseInt(x)); //lines.shift()
let duracao = [];
duracao[0] = new Array (horario[0], horario[1])
duracao[1] = new Array (horario[2], horario[3])
let duracaoHora;
let duracaoMinuto;

if (duracao[0][0] == duracao[1][0]) {
      duracaoHora = 24;
      duracaoMinutos = minutos(duracao[0][1], duracao[1][1]);
}
else if (duracao[0][0] > duracao[1][0]) {
      duracaoHora = 24 - duracao[0][0] + duracao[1][0];
      duracaoMinutos = minutos(duracao[0][1], duracao[1][1]);
}
else if (duracao[0][0] < duracao[1][0]) {
      duracaoHora = duracao[1][0] - duracao[0][0];
      if (duracaoHora == 1) {
            duracaoHora = 0;
            duracaoMinuto = 60 - duracao[0][1] + duracao[1][1];
            if (duracaoMinuto >= 60) {
                  duracaoHora = 1;
                  duracaoMinuto = -(60 - duracaoMinuto);
            }
      }
      else {
            duracaoHora = duracao[1][0] - duracao[0][0];
            duracaoMinutos = minutos(duracao[0][1], duracao[1][1]);
      }
}
console.log(`O JOGO DUROU ${duracaoHora} HORA(S) E ${duracaoMinuto} MINUTO(S)`);