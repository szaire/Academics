let n = parseInt(prompt(`Digite um numero inteiro`));
let soma = 0;

for (let i = 1; i < n; i++) {
      if (n % i == 0) {
            soma += i
      }
}
if (soma == n) {
      document.write(`O número é perfeito`);
}
else {
      document.write(`O número não é perfeito`);
}