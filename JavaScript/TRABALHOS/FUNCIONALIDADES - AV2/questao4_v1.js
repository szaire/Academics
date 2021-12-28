let n = parseInt(prompt(`Digite um número de 1 a 100`));
let rot;
let cnt = 0;

for (let i = 1; i <= n; i++) { // 31
      let cntNormal = 0;
      let cntPrimo = 0;
      let dez = parseInt(i / 10);
      let und = parseInt(i % 10);
      rot = (und * 10) + dez; // 13
      if (dez == 0) {
            rot = und;
      }
      for (let j = 1; j <= rot; j++) {
            if (rot % j == 0) {
                  cntPrimo++;
            }
      }
      for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                  cntNormal++;
            }
      }
      
      if (cntPrimo == 2 && cntNormal == 2) {
            document.write(`${i}<br>`);
      }
}