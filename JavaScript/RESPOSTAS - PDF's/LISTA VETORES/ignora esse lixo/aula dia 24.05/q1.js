// Faça um programa que preencha dois vetores, X e Y, com “n” e “m” 
// números inteiros cada, respectivamente. Faça um vetor Z receber 
// a união de X com Y.

var n = parseInt(prompt(`tamanho de x`));
var m = parseInt(prompt(`tamanho de y`));
var x = [];
var y = [];
var z = [];

for (let i = 0; i < n; i++) {
      let num = parseInt(prompt(`Digite o elemento ${i} do vetor x`));
      x.push(num);
}

for (let i = 0; i < m; i++) {
      let num = parseInt(prompt(`Digite o elemento ${i} do vetor y`));
      y.push(num);
}

z = x.concat(y);
console.log(z);