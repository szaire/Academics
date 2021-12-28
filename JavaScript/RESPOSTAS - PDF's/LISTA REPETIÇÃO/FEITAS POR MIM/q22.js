let n = parseInt(prompt(`Digite a quantidade n`));
let max = -Infinity;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      if (num > max) {
            max = num;
      }
}
document.write(`O maior número é ${max}`);