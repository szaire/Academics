let n = parseInt(prompt('Digite um numero inteiro N'));

for (let j = 1; j <= n; j++) {
      let cnt = 0;

      for (let i = 1; i <= j; i++) {
            if (j % i == 0) {
                  cnt++;
            }
      }

      if (cnt <= 2) {
            document.write(`${j} é primo<br>`);
      }
      
      else {
            document.write(`${j} não é primo<br>`);
      }
}