function potencia(b, e) {
      let prod = 1;
      for (let i = 1; i <= e; i++) {
            prod *= b;
      }
      return prod;
}

function fatorial(n) {
      let fatorial = 1;
      for (let i = 1; i <= n; i++) {
            fatorial *= i;
      }
      return fatorial;
}

let n = parseInt(prompt(`Digite o grau n`));
let x = parseInt(prompt(`Digite x`));
let soma = 0;

for (let i = 3; i <= n; i+=2) {
      soma = soma + potencia(x, i)/fatorial(i);
}

document.write(`${soma}`);