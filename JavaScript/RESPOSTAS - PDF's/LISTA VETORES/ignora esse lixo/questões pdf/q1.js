// Faça um programa que preencha um vetor com nove números inteiros, calcule e mostre os números
// primos e suas respectivas posições.

function ehPrimo(n) {
      let cnt = 0;
      for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                  cnt++;
            }
      }
      if (cnt == 2) {
            return true;
      }
      else {
            return false;
      }
}

let vetor = [];

for (let i = 0; i < 9; i++) {
      vetor[i] = parseInt(prompt(`Digite o número da posição ${i}`));
}

document.write(`Os números primos são:<br>`);
for (let i = 0; i < 9; i++) {
      if (ehPrimo(vetor[i])) {
            document.write(`${vetor[i]} --> posição: ${i}<br>`);
      }
}