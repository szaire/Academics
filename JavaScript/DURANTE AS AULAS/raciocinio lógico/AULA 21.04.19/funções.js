function fatorial(n) {
      let prod = 1;
      for (let i = 1; i <= n; i++) {
            prod *= i
      }
      return prod;
}

let n = parseInt(prompt(`Digite um numero n`));

for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
            let prod = fatorial(i);
            document.write(`${i}! * ${j} = ${prod*j}<br>`);
      }
      document.write(`<br>`);
}