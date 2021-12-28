function ehPrimo (n) {
      var cnt = 0;
      for (var i = 1; i <= n; i++) {
            if (n % i == 0) {
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
   
function somaPrimoImpar (x, y) {
      var aux;
      var soma = 0;
      if (x > y) {
           aux = x;
           x = y;
           y = aux;          
                 
      }
   
      for (x; x <= y; x++) { 
           if (ehPrimo(x)) {
               if (x % 2 != 0) {
                   soma = soma + x;
               }
            }
      }
                        
      return soma;
}

function quantidadeDigitos(n) {
      var cnt = 0;
      while (n > 0) { 
            n = parseInt(n / 10); 
            cnt++; 
      }
      return cnt;
}

function Palindromoo (j) { // 123
    var a1 = j; // 123
    var aux = 0;
    var inverso = 0;

    for (i = 0 ; i <= quantidadeDigitos(j) ; i++) { // 1 <= 3
      aux = Math.trunc(a1 / 10**i); // 1
      inverso = inverso + Math.trunc(aux % 10);
      //        321    

      if (quantidadeDigitos(inverso) < quantidadeDigitos(a1)) {
            // 3                              3
            inverso = inverso * 10;
                  //  320
      }
    }

    alert(`a = ${a1} e b = ${inverso}`)
//              123           321

    if (a1 == inverso) {
            alert(`O número é palíndromo`);
            return false;
      } 
      else {
            alert(`O número não é palíndromo`);
            return true;
    }
}

function decimalParaBinario (n) {
      while (n > 0) {
          var resto = n % 2;
          n = Math.floor(n / 2); 
          soma = resto + soma;
      }
      return soma;
}   

function rotacao(n) {
      var qntNumRotacoes = 0;

      for (var i = 1; i <= n; i++) {
            var qntDigitos = quantidadeDigitos(i);
            var cnt = 0;

            for (var j = 1; j <= qntDigitos; j++) {
                  var rotacao = (i % 10 * Math.pow(10, qntDigitos - 1)) + parseInt(i / 10);
                  if (ehPrimo(rotacao) == true) {
                        cnt++;
                  }
                  i = rotacao;
            }
            
            if (cnt == qntDigitos) {
                  qntNumRotacoes++;
            }
      }
      return qntNumRotacoes;
}

while (true) {
      let escolha;
      let operacao = prompt(
            `
            Digite a operação que pretende realizar:\n
            - 1: Soma de números primos\n
            - 2: Palindromos\n
            - 3: Número Binário\n
            - 4: Rotação de números primos
            `
            );
      
      if (operacao == 1) {
            do {
                  var x = parseInt(prompt("x"));
                  var y = parseInt(prompt("y"));
                  alert(somaPrimoImpar(x,y));
                  escolha = prompt(
                        `
                        Você deseja continuar a operação?\n
                        S - Sim\n
                        N - Não
                        `
                        );
                  if (escolha == 'S') {
                        operacao = 1;
                  }
                  else {
                        break;
                  }
            } while (operacao == 1);
      }

      else if (operacao == 2) {
            do {
                  var j = prompt(`Digite um inteiro`);
                  Palindromoo (j);
                  escolha = prompt(
                        `
                        Você deseja continuar a operação?\n
                        S - Sim\n
                        N - Não
                        `
                        );
                  if (escolha == 'S') {
                        operacao = 2;
                  }
                  else {
                        break;
                  }
            } while (operacao == 2);
      }

      else if (operacao == 3) {
            do {
                  var n = parseInt(prompt(`Digite o número inteiro que será convertido para Binário`));
                  var soma = "";
                  alert(decimalParaBinario(n));
                  escolha = prompt(
                        `
                        Você deseja continuar a operação?\n
                        S - Sim\n
                        N - Não
                        `
                        );
                  if (escolha == 'S') {
                        operacao = 3;
                  }
                  else {
                        break;
                        
                  }
            } while (operacao == 3);
      }

      else if (operacao == 4) {
            do {
                  var n = parseInt(prompt(`Digite um número`));
                  var qntRotacoes = rotacao(n);
                  alert(`A quantidade de números até ${n} com está caracterísitca é: ${qntRotacoes}`);
                  escolha = prompt(
                        `
                        Você deseja continuar a operação?\n
                        S - Sim\n
                        N - Não
                        `
                        );
                  if (escolha == 'S') {
                        operacao = 4;
                  }
                  else {
                        break;
                        
                  }
            } while (operacao == 4)
      }

      else {
            document.write(`*Shut down do Windows XP*`);
            break;
      }
}