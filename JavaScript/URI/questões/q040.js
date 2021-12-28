let notas = prompt().split(" ").map(x => parseFloat(x)); //lines.shift()
let [n1, n2, n3, n4] = notas;
let media = parseFloat(((n1*2 + n2*3 + n3*4 + n4) / 10));

console.log(`Media: ${media.toFixed(1)}`);
if (media >= 7.0) {
      console.log(`Aluno aprovado.`);
}
else if (media < 5.0) {
      console.log(`Aluno reprovado.`);
}
else if (media >= 5.0 && media <= 6.9) {
      console.log(`Aluno em exame.`);
      let notaExame = parseFloat(prompt()); //lines.shift()
      console.log(`Nota do exame: ${notaExame.toFixed(1)}`);
      let mediaFinal = (media + notaExame) / 2;
      if (mediaFinal >= 5.0) {
            console.log(`Aluno aprovado.`);
      }
      else {
            console.log(`Aluno reprovado.`);
      }
      console.log(`Media final: ${mediaFinal.toFixed(1)}`);
}