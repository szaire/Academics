let n = parseInt(prompt(`Digite a quantidade n`));
let min = Infinity;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      if (num < min) {
            min = num;
      }
}
document.write(`O maior número é ${min}`);