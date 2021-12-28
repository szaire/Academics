// com variável auxiliar
var vet = [1, 2, 3, 4, 5];
var n = parseInt(vet.length)
var index = vet.length - 1;
var aux;

document.write(`${vet}<br>`);

for (let i = 0; i < n/2; i++) {
      aux = vet[i];
      vet[i] = vet[index];
      vet[index] = aux;
      index--;
}

document.write(`${vet}`);