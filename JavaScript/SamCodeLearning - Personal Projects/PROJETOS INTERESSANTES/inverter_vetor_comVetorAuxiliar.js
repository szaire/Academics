// com vetor auxiliar
var vet = [1, 2, 3, 4, 5];
var vetAux = [];
var n = vet.length;
var index = vet.length - 1;

for (let i = 0; i < n; i++) {
      vetAux[index] = vet[i];
      index--; 
}

document.write(`${vet}<br>`);
document.write(`${vetAux}`);