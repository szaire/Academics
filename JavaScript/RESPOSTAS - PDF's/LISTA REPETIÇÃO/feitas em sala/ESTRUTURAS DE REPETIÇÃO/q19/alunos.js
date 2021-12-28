/*Faca um algoritmo que recebe um numero inteiro n que É
a quantidade de alunos em uma turma. O algoritmo deve 
receber n notas digitadas pelo usuario.
Se a média das notas for maior que 8, mostre "parabéns".
Do contrário, mostre "vamos estudar"*/

let n = parseInt(prompt('Digite a quantidade de alunos da turma'));
let soma = 0;
let media;
for (let i = 1; i <= n; i++) {
      let num = parseFloat(prompt('Digite as notas dos alunos'));
      soma += num;
}
media = soma / n;
document.write(`A média da truma foi de ${media}.`);
if (media > 8) {
      document.write(' Parabéns!');
}
else {
      document.write(' Vamos estudar!');
}