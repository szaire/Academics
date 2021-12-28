var n = parseInt(prompt(`tamanho do vetor x`));
var m = parseInt(prompt(`tamanho do vetor y`));
var X = [];
var Y = [];
var Z = [];

// Declara vetor X
for (let i = 0; i < n; i++) {
      X[i] = parseInt(prompt(`elemento ${i} do vetor x`)); 
}

// Declara vetor Y
for (let i = 0; i < m; i++) {
      Y[i] = parseInt(prompt(`elemento ${i} do vetor y`)); 
}

// Preencher vetor Z com X
for (let i = 0; i < n; i++) {
      Z[i] = X[i];
}

// Preencher vetor Z com Y
var pos = n;
for (let i = 0; i < m; i++) {
      Z[pos] = Y[i];
      pos++;
}

document.write(`${X}<br>`);
document.write(`${Y}<br>`);
document.write(`${Z}<br>`);