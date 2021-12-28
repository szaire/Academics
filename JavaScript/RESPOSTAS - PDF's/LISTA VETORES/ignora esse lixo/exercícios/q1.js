let A = [];
let soma = 0;

// a)
for (let i = 0; i < 6; i++) {
      A[i] = parseInt(prompt(`Digite o número ${i}`));       
}

// b)
soma = A[0] + A[1] + A[5];
document.write(`Soma dos elementos A[0], A[1] e A[5] = ${soma}<br><br>`);

// c)
A[4] = parseInt(prompt(`Digite o elemento 4`));

// d)
document.write(`Vetor A: ${A}`);