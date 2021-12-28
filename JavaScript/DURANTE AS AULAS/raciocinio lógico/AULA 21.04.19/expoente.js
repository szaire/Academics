function potencia(b, e) {
      let n = 1;
      for (let i = 1; i <= e; i++) {
            n *= b;
      }
      return n
}

let base = parseInt(prompt(`Digite a base`));
let exp = parseInt(prompt(`Digite o expoente`));
let pot = potencia(base, exp);
document.write(`${base} ^ ${exp} = ${pot}`);