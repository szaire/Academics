let n = parseInt(prompt(`Digite n`));
let a = 0;
while (n > 0) {
      if (n % 2 != 0) {
            a = parseInt(n % 10); 
            n = parseInt(n / 10); 
      }
      document.write(`${a}`);
}