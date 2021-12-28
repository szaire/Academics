let n = parseInt(prompt(`Digite a quantiade de números`));
let A = [];
let B = [];
let C = [];

for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite o número da posição ${i} no vetor A`));
}
for (let i = 0; i < n; i++) {
      B[i] = parseInt(prompt(`Digite o número da posição ${i} no vetor B`));
}
document.write(`vetor A: ${A}<br><br>vetor B: ${B}<br><br>`);

for (let i = 0; i < n; i++) {
      if (A[i] > B[i]) {
            C[i] = A[i];
      }
      else {
            C[i] = B[i];
      }
}

document.write(`vetor C: ${C}`);