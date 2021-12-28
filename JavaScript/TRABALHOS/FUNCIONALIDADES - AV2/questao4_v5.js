function quantidadeDigitos(n) {
      let cnt = 0;
      while (n > 0) {
            n = parseInt(n / 10);
            cnt++;
      }
      return cnt;
}

function ehPrimo(num) {
      if (num == 1 || num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
            return false;
      }
      else {
            return true;
      }
}

function rotacao(n) {
      let qntNumRotacoes = 0;

      for (let i = 1; i <= n; i++) {
            let qntDigitos = quantidadeDigitos(i);
            let cnt = 0;

            for (let j = 1; j <= qntDigitos; j++) {
                  let rotacao = (i % 10 * Math.pow(10, qntDigitos - 1)) + parseInt(i / 10);
                  if (ehPrimo(rotacao) == true || i == 2 || i == 3 || i == 5 || i == 7) {
                        cnt++;
                  }
                  i = rotacao;
            }
            
            if (cnt == qntDigitos) {
                  document.write(`${i}<br>`);
                  qntNumRotacoes++;
            }
      }
      return qntNumRotacoes;
}

let n = parseInt(prompt(`Digite um número`));
let qntRotacoes = rotacao(n);
document.write(`A quantidade de números até ${n} com está caracterísitca é: ${qntRotacoes}`);