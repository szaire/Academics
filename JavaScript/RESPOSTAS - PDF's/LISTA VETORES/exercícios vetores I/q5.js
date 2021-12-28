var n = parseInt(prompt(`Digite n`));
var A = [];
var B = [];
var C = [];

for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite elemento ${i} do vetor A`));
}

for (let i = 0; i < n; i++) {
      B[i] = parseInt(prompt(`Digite elemento ${i} do vetor B`));
}

for (let i = 0; i < n; i++) {
      if (A[i] > B[i]) {
            C[i] = A[i];
      }
      else {
            C[i] = B[i];
      }
}

document.write(
      `
      Vetor A: ${A}<br>
      Vetor B: ${B}<br>
      Vetor C: ${C}<br>
      `
      );