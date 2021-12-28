let A = [];
let B = [];
let C = [];

for (let i = 0; i < 10; i++) {
      A[i] = parseInt(prompt(`Digite o elemento ${i} do vetor A`)); 
      C.push(A[i]);
      B[i] = parseInt(prompt(`Digite o elemento ${i} do vetor B`)); 
      C.push(B[i]);
}

document.write(`${C}`);