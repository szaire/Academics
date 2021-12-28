const ehImpar = (n) => {
      if (n % 2 == 0) {
            return false;
      }
      return true;
}

let n = parseInt(prompt(`Digite n`));
let vet = [];

for (let i = 0; i < n; i++) {
      vet[i] = parseInt(prompt(`Digite elemento ${i}`)); 
}

for (let i = 0; i < n; i++) {
      if (ehImpar(vet[i])) {
            vet[i] = -1;
      } 
      else {
            vet[i] = 1;
      }
}

console.log(`${vet}`);