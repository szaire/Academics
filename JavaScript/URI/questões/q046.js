let horario = prompt().split(` `).map(x => parseInt(x)); // lines.shift()
let duracaoTotal;

if (horario[0] == horario[1]){
      duracaoTotal = 24;
}
else if (horario[0] > 12 && horario[1] < 12) {
      horario.splice(0, 1, horario[0] - 12);
      duracaoTotal = (12 - horario[0]) + horario[1];
}
else if (horario[0] < 12 && horario[1] > 12) {
      horario.splice(1, 1, horario[1] - 12);
      duracaoTotal = (12 - horario[0]) + horario[1];
}
else {
      horario.sort((a, b) => a - b);
      duracaoTotal = horario[1] - horario[0];
}

console.log(`O JOGO DUROU ${duracaoTotal} HORA(S)`);