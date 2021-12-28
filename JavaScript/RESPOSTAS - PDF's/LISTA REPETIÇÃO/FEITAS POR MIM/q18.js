let n = parseInt(prompt(`Digite a quantidade de alunos`));
let soma = 0;
let media = 0;

for (let i = 1; i <= n; i++) {
      let nota = parseInt(prompt(`Digite a nota ${i}`));
      soma += nota;
}
media = soma/n
document.write(`A média de notas da turma é: ${media}`);