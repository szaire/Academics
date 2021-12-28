let n = parseInt(prompt(`Digite um numero n`));
let k = parseInt(prompt(`Digite um numero k`));

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o número ${i}`));
      var cnt = 0; //se eu permanecer com o código assim, o programa rodará, entretanto...
      if (num < k) {
            cnt++
      }
}
document.write(`${cnt} números são menores que ${k}.`); //... mostrará cnt como sendo 0. por que?