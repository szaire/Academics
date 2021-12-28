let n = parseInt(prompt('Digite um numero n'));
let k = parseInt(prompt('Digite um numero k'));

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt('Digite um numero inteiro'));
      if (num > k) {
            document.write(`${num} <br>`);
      }
}