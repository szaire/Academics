let b = parseInt(prompt(`Digite a base`));
let e = parseInt(prompt(`Digite o expoente`));
let prod = 1;

for (let i = 1; i <= e; i++) {
      prod *= b;
}
document.write(`${b} ^ ${e} = ${prod}`);