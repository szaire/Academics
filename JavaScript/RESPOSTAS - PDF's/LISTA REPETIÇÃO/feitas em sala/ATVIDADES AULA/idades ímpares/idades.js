//Receber n números como entrada. Mostrar somente os ímpares.

let n = parseInt(prompt('Digite um número'));

for (let i = 0; i<= n; i++) {
      if (i % 2 != 0) {
            document.write(`${i} <br>`);
      }
}