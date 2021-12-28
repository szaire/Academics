let n = parseInt(prompt(`Digite a altura da pirâmide`));

for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
            document.write(`* `);
      }
      document.write(`<br>`);
}