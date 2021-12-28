function potencia(b, e) {
      let prod = 1
      for (let i = 1; i <= e; i++) {
            prod *= b
      }
      return prod;
}

let n = parseInt(prompt(`Digite o grau`));
let x = parseInt(prompt(`Digite x`));
let soma = 0;


for (let i = 0; i <= n; i++) {
      let k = parseInt(prompt(`Digite o coeficiente`));
      soma = soma + k * potencia(x, i);     
}

document.write(`${soma}`);