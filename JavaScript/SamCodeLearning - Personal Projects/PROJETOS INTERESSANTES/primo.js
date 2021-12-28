let n = parseInt(prompt(`Digite um numero`));
let cnt = 0;

for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
            cnt++;
      }
}

if (cnt == 2) {
      document.write(`${n} é um número primo`);
}
else {
      document.write(`${n} não é um número primo`);
}