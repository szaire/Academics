let n = parseInt(prompt('Digite a quantidade de pessoas'));
let contador = 0;
 
for (let i = 1; i <= n; i++) {
      let idade = parseInt(prompt('Digite a idade'));
      if (idade >= 18) {
            contador++;
      }
}
if (contador == 1) {
      document.write(`Há uma pessoa maior de 18 anos`);
}
else if (contador > 0 ) {
      document.write(`Há ${contador} pessoas maiores de 18 anos`);
}
else {
      document.write(`Não há pessoas maiores de 18 anos!`);
}