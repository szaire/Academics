let n = parseInt(prompt(`Digite o tamanho do vetor`));
let A = [];
let B = [];
let C = [];

for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite os elementos do vetor A`)); 
}
for (let i = 0; i < n; i++) {
      B[i] = parseInt(prompt(`Digite os elementos do vetor B`)); 
}
for (let i = 0; i < n; i++) {
      C[i] = A[i] + B[i]; 
}

document.write(C.join(', '));