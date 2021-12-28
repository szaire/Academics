let n = parseInt(prompt(`Digite um número "n"`));
let max = -Infinity;
let min = Infinity;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o número ${i}`));
      if (num > max) {
            max = num;
      }
      if (num < min) {
            min = num;
      }
}
document.write(
      `
      O maior número é: ${max}<br>
      O menor número é: ${min}<br>
      `
      );