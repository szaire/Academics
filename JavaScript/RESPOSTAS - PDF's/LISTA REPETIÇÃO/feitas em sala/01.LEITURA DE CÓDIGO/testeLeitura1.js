let n = parseFloat(prompt('Digite o número de tabuadas que você deseja ter'))

for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= 10; j++) {
            document.write(`${j} x ${i} = ${j * i} <br>`);
      }
      document.write('<br>');
}