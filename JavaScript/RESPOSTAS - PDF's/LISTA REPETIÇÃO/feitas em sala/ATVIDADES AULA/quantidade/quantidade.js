/*
Faca um algoritmo que recebe um numero inteiro n que é
a quantidade de alunos em uma turma. O algoritmo deve 
receber n notas digitadas pelo usuario.
Calcular a média das notas maiores do que 8.
*/ 

let n = parseInt(prompt('Digite a quantiade de alunos'));
let soma = 0;
let ctn_8 = 0;
let media;

for (let i = 1; i <= n; i++) {
      let nota = parseFloat(prompt(`Digite a nota ${i}:`));
      if (nota > 8) {
            soma += nota; 
            ctn_8++;
      }
}
media = soma/ctn_8;
document.write(`A média das notas maiores que 8 da turma de ${n} alunos é ${media.toFixed(2)} pontos`);