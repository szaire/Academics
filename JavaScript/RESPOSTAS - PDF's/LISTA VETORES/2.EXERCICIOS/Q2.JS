var n = parseInt(prompt(`Digite n`));
var A = [];
var B = [];
var C = [];

for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite o elemento ${i} do vetor A`)); 
}

for (let i = 0; i < n; i++) {
      B[i] = parseInt(prompt(`Digite o elemento ${i} do vetor B`)); 
}

for (let i = 0; i < n; i++) {
      C[i] = A[i] + B[i];      
}

document.write(`${A} <br>`);
document.write(`${B} <br>`);
document.write(`${C} <br>`);