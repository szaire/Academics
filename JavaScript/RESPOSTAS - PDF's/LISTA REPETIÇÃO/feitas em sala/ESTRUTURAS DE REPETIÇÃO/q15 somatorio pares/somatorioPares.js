let n = parseInt(prompt('Digite a quantiade de números'));
let soma = 0;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt('Digite o valor de um número'));
      if (num % 2 == 0) {
            soma += num;
      }
}
document.write(`A soma dos números é: ${soma}`);