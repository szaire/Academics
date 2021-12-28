let n = parseInt(prompt('Digite um numero n'));
let cnt = 0;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o número ${i}`));
      if (num > 10) {
            cnt++
      }
}
document.write(`${cnt} números são maiores que 10.`);