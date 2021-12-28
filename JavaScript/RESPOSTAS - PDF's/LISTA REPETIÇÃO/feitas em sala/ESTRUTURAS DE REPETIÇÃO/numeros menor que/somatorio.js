let n = parseInt(prompt('Digite a quantiade de números'));
let k = parseInt(prompt('Digite um numero limite'));

document.write('Os números menores que k são:<br>');
for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt('Digite o valor de um número'));
      if (num < k) {
            document.write(num + '<br>');
      }
}