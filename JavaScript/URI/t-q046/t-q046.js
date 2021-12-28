let horario = prompt().split(` `).map(x => parseInt(x)); // lines.shift()
let duracaoTotal;

if (horario[0] == horario[1]){
      duracaoTotal = 24;
}
else if (horario[0] > horario[1]) {
      duracaoTotal = 24 - horario[0] + horario[1];
}
else if (horario[0] < horario[1]) {
      duracaoTotal = horario[1] - horario[0];
}

console.log(`O JOGO DUROU ${duracaoTotal} HORA(S)`);