let grauN = parseInt(prompt(`Digite o grau do polinômio`));
let soma = 0;

for (let i = 1; i <= grauN; i++) {
      let coef = parseInt(prompt(`Digite o coeficiente do ${i}º termo`));
      let vrvl = parseInt(prompt(`Digite o valor da variável do ${i}º termo`));
      let prod = 1;
      for (let j = 1; j <= i; j++) {
            prod *= vrvl;    
      }
      soma += prod * coef;
}
document.write(`${soma}`);