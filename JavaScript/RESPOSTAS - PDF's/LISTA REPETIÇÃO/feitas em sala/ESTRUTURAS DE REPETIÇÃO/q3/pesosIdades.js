/*
Receber n pesos e n idades
Mostrar quantos pesos são maiores do que 50kg
Mostrar quantas idades estão entre 20 e 30
*/


let N = parseInt(prompt('Digite a quantidade de pessoas'));
let cP = 0;
let cI = 0;

for (let i = 1; i <= N; i++) {
      let pesos = parseFloat(prompt('Digite o peso'));
      let idades = parseInt(prompt('Digite a idade'));
      if (pesos > 50) {
            cP++
      }
      if (idades >= 20 && idades <= 30) {
            cI++
      }
}

document.write(`A quantidade de pesos é ${cP}`);

for (let i = 0; i < 3; i++) {
      document.write('<br>');
}

document.write(`A quantidade de idades é ${cI}`);