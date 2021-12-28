function quantidadeDigitos(n) {
      var cnt = 0;
      while (n > 0) {
            n = parseInt(n / 10);
            cnt++;
      }
      return cnt;
}

function ehPrimo (n) {
      var cnt = 0;
      for (i = 1 ; i <= n ; i++) {
            if (num % i == 0) {
            cnt++;
            }
      }
      if (cnt == 2) {
            return true;
      }
      else {
            return false;
      }
}

function rotacao(n) {
      var qntNumQueTemRotacoesPrimas = 0;

      for (var i = 1; i <= n; i++) {
            var qntDigitos = quantidadeDigitos(i);
            var cntRotacoes = 0;

            for (var j = 1; j <= qntDigitos; j++) {
                  var rotacao = (i % 10 * Math.pow(10, qntDigitos - 1)) + Math.trunc(i / 10);
                  if (ehPrimo(rotacao) == true) {
                        cntRotacoes++;
                  }
                  i = rotacao;
            }
            
            if (cntRotacoes == qntDigitos) {
                  qntNumQueTemRotacoesPrimas++;
            }
      }
      return qntNumQueTemRotacoesPrimas;
}

var n = parseInt(prompt(`Digite um número`));
var qntRotacoes = rotacao(n);
alert(`A quantidade de números até ${n} com está caracterísitca é: ${qntRotacoes}`);