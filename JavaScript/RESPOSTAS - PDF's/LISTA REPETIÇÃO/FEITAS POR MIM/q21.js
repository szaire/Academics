let n = parseInt(prompt(`Digite um numero n`));
let somaImp = 0;
let somaPar = 0;
let cnt = 0;
let soma_30 = 0;
let cnt_30 = 0;
let media30 = 0;

for (let i = 1; i <= n; i++) {
      let num = parseInt(prompt(`Digite o numero ${i}`));
      if (num % 2 == 0) {
            somaPar += num;
      }
      else {
            somaImp += num;
      }
      if (num >= 10 && num <= 20) {
            cnt++;
      }
      if (num > 30) {
            soma_30 += num;
            cnt_30++;
      }
}
media30 = soma_30/cnt_30;
document.write(
      `
      A soma dos pares é: ${somaPar}<br>
      A soma dos ímpares é: ${somaImp}<br>
      A quantidade de números no intervalo [10,20] é: ${cnt}<br>
      A média dos números maiores que 30 é: ${media30}<br>
      `
      );