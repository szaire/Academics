let A = [];
let B = [];

for (let i = 0; i < 3; i++) {
      A[i] = parseInt(prompt(`Digite o ${i+1}º número do vetor A`));
}
for (let i = 0; i < 3; i++) {
      B[i] = parseInt(prompt(`Digite o ${i+1}º número do vetor B`));
}

for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
            if (A[i] == B[j]) {
                  B.splice(j, 1);
            }
      }
      A.push(B[i]);
}

document.write(`${A}`); 