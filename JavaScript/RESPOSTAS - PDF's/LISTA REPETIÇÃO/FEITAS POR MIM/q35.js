function PA(a1, r, n) {
      for (let i = 1; i <= n; i++) {
            if (i < n) {
                  document.write(`${a1}, `);
            }
            else {
                  document.write(`${a1}`);
            }
            a1 += r;
      }
}

let a1 = parseInt(prompt(`Digite o valor de entrada`));
let r = parseInt(prompt(`Digite a razão`));
let n = parseInt(prompt(`Digite a quantidade de termos`));

PA(a1, r, n);