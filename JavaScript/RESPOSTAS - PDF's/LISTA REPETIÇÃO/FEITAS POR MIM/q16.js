let n = parseInt(prompt(`Digite um numero`));
let soma = 0;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      soma += num;
      document.write(num + '<br>');
}
document.write(`A soma dos números digitados é: ${soma}`);