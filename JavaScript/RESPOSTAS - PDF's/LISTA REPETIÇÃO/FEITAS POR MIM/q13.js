let n = parseInt(prompt('Digite um numero n'));

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      if (num > 50) {
            document.write(num + '<br>');
      }
}