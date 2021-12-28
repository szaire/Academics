/*
// numeros de 1 até n
let n = parseInt(prompt('Digite um numero n'));

for (var i = 1; i <= n; i++) {
      document.write(i + '<br>');
}


// numeros diviseis por 3 de 1 até n
let n = parseInt(prompt('Digite um numero n'));

for (var i = 1; i <= n; i++) {
      if (i % 3 == 0) {
            document.write(i + '<br>');
      }
}

//ISSO ESTÁ ERRADO! ver a explicação no word!!
let n = parseInt(prompt('Digite um numero n'));

for (var i = 1; i <= n && i % 3 == 0; i++) {
      document.write(i + '<br>');
}

// numeros diviseis por 3 e 5 de 1 até n
let n = parseInt(prompt('Digite um numero n'));

for (var i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
            document.write(i + '<br>');
      }
}
*/

// numeros ímpares diviseis por 3 e 5 de 1 até n
let n = parseInt(prompt('Digite um numero n'));

for (var i = 1; i <= n; i++) {
      if (i % 3 == 0 && i % 5 == 0 && i % 2 != 0) {
            document.write(i + '<br>');
      }
}