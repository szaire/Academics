let b = parseInt(prompt(`Digite um numero b`));
let e = parseInt(prompt(`Digite um numero e`));
let exp = 1;

for (let i = 1; i <= e; i++) {
      exp *= b; 
}
document.write(`${b}^${e} = ${exp}`);