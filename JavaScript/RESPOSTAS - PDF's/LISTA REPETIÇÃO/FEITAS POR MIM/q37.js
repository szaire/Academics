let n;
let media;
let cnt = 0;
let soma = 0;
let posicao = 1;
let maiorNum = -Infinity;
let menorNum;

while (true) {
      n = parseFloat(prompt(`Digite o número ${posicao}:`));
      if (n == -1) {
            break;
      }

      // soma
      soma += n;

      // quantidade
      cnt++;

      //maior numero
      if (n > maiorNum) {
            maiorNum = n;
      }

      //menor numero
      if (n < maiorNum) {
            menorNum = n;
      }

      posicao++;
}

//media
media = soma/cnt;

document.write(
      `
      Soma: ${soma}<br>
      Quantidade: ${cnt}<br>
      Media: ${media}<br>
      Maior número: ${maiorNum}<br>
      Menor número: ${menorNum}<br>
      `
      );
