let A = [];
let B = [];
let C = [];

for (let i = 0; i < 8; i++) {
      C[i] = parseInt(prompt(`Digite o numero ${i}`));
      if (C[i] < 0) {
            A.push(C[i]);
      } 
      else {
            B.push(C[i]);
      }
}

document.write(`Vetor Original: ${C}<br>`);
document.write(`Vetor Negativo: ${A}<br>`);
document.write(`Vetor Positivo: ${B}`);