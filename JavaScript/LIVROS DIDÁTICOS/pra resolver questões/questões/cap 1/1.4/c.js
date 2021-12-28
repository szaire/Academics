let n1 = parseFloat(prompt('Digite duas notas'));
let n2 = parseFloat(prompt('Digite duas notas'));
let media = (n1 + n2) / 2;
document.write(`A nota do aluno foi: ${media} pontos<br>`);
if (media >= 7) {
      document.write(`Aprovado!`);
} 
else {
      document.write(`Reprovado!`);
}