// numero inteiro
// dois algarismos: 10 >= x <= 99
// produto dos algarismos = soma dos algarismos 

for (var i = 10; i <= 99; i++) {
      var alg1 = parseInt(i / 10); //45 / 10 = 4 (parte inteira)
      var alg2 = parseInt(i % 10); //45 / 10 = 5 (parte fracionária)
      var soma = alg1 + alg2;
      var produto = alg1 * alg2;
      if (soma == produto) {
            document.write(`O número é ${i}`);
      }
}