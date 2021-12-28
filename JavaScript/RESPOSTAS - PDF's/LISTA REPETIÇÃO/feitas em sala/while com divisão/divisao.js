let n = parseInt(prompt('Digite um número n'));
let i = 1;
document.write(`Os números divisíveis por 3 e por 5 são:<br>`);
while (i <= n) {
      if (i % 3 == 0 && i % 5 == 0) {
            document.write(i + '<br>');
      }
      i++;
}