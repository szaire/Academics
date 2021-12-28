function numPrim(n) {
      var cnt = 0;
      for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                  cnt++
            }
      }
      if (cnt == 2) {
            return true;
      }
      else {
            return false;
      }
}

let n = parseInt(prompt(`Digite um numero n`));
let tf = numPrim(n)
if (tf == true) {
      document.write(`${n} é primo`);
}
else {
      document.write(`${n} não é primo`);
}