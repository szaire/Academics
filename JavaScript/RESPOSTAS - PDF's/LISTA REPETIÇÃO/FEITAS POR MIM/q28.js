let n = parseInt(prompt(`Digite um numero n`));
let soma = 0;

for (let i = 1; i < n; i++) {
      if (n % i == 0) {
            soma += i;
      }
}
if (soma == n) {
      document.write(`${n} é um número perfeito`);
}
else {
      document.write(`${n} não é um número perfeito`);
}