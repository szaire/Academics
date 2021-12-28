//leibniz
let n = 100000;
let pi;
let soma = 0;
let sinal = 1;

for (let i = 1; i <= n; i+=2) {
      soma = soma + (1/i) * sinal;
      sinal *= -1;
}
pi = 4 * soma;

document.write(`valor de pi: ${pi}`);