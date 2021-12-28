let n = parseInt(prompt(`Digite um numero`));
let soma = 0;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      if (num % 2 == 0) {
            soma += num
      }
}
document.write(`A soma dos pares é: ${soma}.`);