function ehPar(n) {
      if (n % 2 == 0) {
            return true;
      }
      else {
            return false;
      }
}

let n = parseInt(prompt(`Digite a quantiade de números do vetor`));
let A = [];

for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite o número ${i}`));
}

document.write(`${A}<br>`);

for (let i = 0; i < A.length; i++) {
      if (ehPar(A[i])) {
            A[i] = 1;
      }
      else {
            A[i] = -1;
      } 
}

document.write(`${A}<br>`);