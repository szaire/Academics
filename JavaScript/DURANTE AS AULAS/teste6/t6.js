let a =parseInt(prompt());

if (a > 5) {
     document.write(`${a} é maior que 5<br>`);
     if (a < 15) {
          document.write(`${a} está entre 5 e 15`)
          if (a % 2 == 0) {
               document.write(' e é um número par!')
          }
          else {
               document.write(' e é um número ímpar!')
          }
     }
}