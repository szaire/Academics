function contaDigitos(n) {
      
}


let n = parseInt(prompt(`Digite um número inteiro`));
let cnt = 0;
let cntDig = contaDigitos(n);
let cnt = 0;
while (n > 0) {
      n = parseInt(n / 10);
      cnt++;
}

for (let i = 1; i <= cntDig; i++) {
      
      let rot = (i % 10) * Math.pow(10, cntDig - 1) + parseInt(i / 10);
      if (primo(rot) == true ) {
            cnt++;
      }
}
if (cnt == cntDig) {
      document.write(`${n}<br>`);
}
