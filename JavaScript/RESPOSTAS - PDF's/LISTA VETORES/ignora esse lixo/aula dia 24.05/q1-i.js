// Faça um programa que preencha dois vetores, X e Y, com “n” e “m” 
// números inteiros cada, respectivamente. Faça um vetor Z receber 
// a união de X com Y.

var n = parseInt(prompt(`tamanho de x`));
var m = parseInt(prompt(`tamanho de y`));
var x = [];
var y = [];
var z = [];

for (let i = 0; i < n; i++) {
      x[i] = parseInt(prompt(`elemento ${i} do vetor x`));
}

for (let i = 0; i < m; i++) {
      y[i] = parseInt(prompt(`elemento ${i} do vetor y`));
}

for (let i = 0; i < n; i++) {
      z[i] = x[i]; 
}
console.log(z);

let pos = n;
for (let i = 0 ; i < m; i++) {
      z[pos] = y[i];
      pos++;
}
console.log(z);