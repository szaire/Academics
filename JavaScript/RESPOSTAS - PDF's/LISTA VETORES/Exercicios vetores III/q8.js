let n = parseInt(prompt(`Digite n`));
let vet = [];
let pos = 0;

for (let i = 0; i < n; i++) {
      let num = parseInt(prompt(`Digite elemento ${i}`)); 
      if (num > 20) {
            vet[pos] = num;
            pos++;
      }
}

document.write(`${vet}`);