var n = 5;
var nomeCandidatos = ['Joao', 'Jonas', 'Jonildo', 'Roberson', 'Maria'];
var votos = [];
var max = -Infinity;
var candidatoVencedor;

for (let i = 0; i < n; i++) {
      votos[i] = parseInt(prompt(`Digite votos candidato ${i+1}`));
}

for (let i = 0; i < n; i++) {
      if (votos[i] > max) {
            max = votos[i];
            candidatoVencedor = nomeCandidatos[i];
      }
}

document.write(`Candidato vencedor: ${candidatoVencedor}`); 