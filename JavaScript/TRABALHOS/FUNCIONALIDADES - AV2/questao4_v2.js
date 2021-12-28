function qntRotacao(n) {
      while (n > 0) {
            n = parseInt(n / 10);
            cnt++;
      }
}

function 

if (a % 2 != 0) {
      return a;
}
let n = parseInt(prompt(`Digite um número`));
let rot = 0;

for (let i = 1; i <= n; i++) {

      let cntP = 0;
      let cntO = 0;
      let res = rotacao(i, rot);

      for (let j = 1; j <= res; j++) {
            if (res % j == 0) {
                  cntP++;
            }      
      }
      for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                  cntO++;
            }
      }
      if (cntO == 2 && cntP == 2) {
            document.write(`${i}<br>`);
      }
}