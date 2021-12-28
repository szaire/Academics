let n = parseInt(prompt(`Digite a quantidade de tabuadas que você deseja ter`));

for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
            document.write(`${i} x ${j} = ${i*j}<br>`);
      }
      document.write(`<br>`);
}