function parImpar(n) {
      if (n % 2 == 0) {
            return true;
      }
      else {
            return false;
      }
}
 let num = parseInt(prompt(`Digite um número n`));
 let tf = parImpar(num);

 if (tf == true) {
       document.write(`${num} é par`);
      }
else {
       document.write(`${num} é ímpar`);
 }