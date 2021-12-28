var n = 6;
var A = [];
var soma = 0;

//a
for (let i = 0; i < n; i++) {
      A[i] = parseInt(prompt(`Digite elemento ${i}`)); 
}

//b
soma = A[0] + A[1] + A[5];

let num = parseInt(prompt(`Digite elemento 4`));
A[4] = num;

document.write(`soma: ${soma}<br>`);
document.write(`vetor A: ${A}`);