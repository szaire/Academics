let n = parseInt(prompt(`Digite um número n`));
let soma = 0;

for (let i = 1; i < n; i++) {
      if (n % i == 0) {
            soma += i;
            document.write(`${i}<br>`);
      }
      
}
if (soma == n) {
      document.write(`${n} é um número perfeito :D`);
}
else {
      document.write(`${n} não é um número perfeito :(`);
}