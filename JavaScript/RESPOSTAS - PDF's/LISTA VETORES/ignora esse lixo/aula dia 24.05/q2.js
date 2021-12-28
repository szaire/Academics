var nomes = [];
var votos = [];
var n = parseInt(prompt(`Digite a quantidade de eleitores:`));
var soma = 0;

for (let i = 0; i < 5; i++) {
      nomes[i] = prompt(`Digite o nome do ${i+1}º cadidato`);
      votos[i] = 0;
}

for (let i = 0; i < n; i++) {
      let votoEleitor = parseInt(prompt(`1, 2, 3, 4 ou 5`));
      votos[votoEleitor - 1]++;
}
console.log(votos);

for (let i = 0; i < 5; i++) {
      soma += votos[i]; 
}
console.log(soma);

var max = votos[0];
var candidatoGanhador = nomes[0];
for (let i = 0; i < 5; i++) {
      if (votos[i] > max) {
            max = votos[i];
            candidatoGanhador = nomes[i];
      }
}
console.log(candidatoGanhador);