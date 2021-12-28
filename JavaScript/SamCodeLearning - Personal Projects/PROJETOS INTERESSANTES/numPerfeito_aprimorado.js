let n = parseInt(prompt(`Digite o número mais alto para se ter os números perfeitos`));

for (let i = 1; i <= n; i++) {
      let soma = 0;
      for (let j = 1; j < i; j++) {
            if (i % j == 0) {
                  soma += j;
            }
      }
      if (soma == i) {
            document.write(`${i}<br>`);
      }
}