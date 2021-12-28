const quantidadeDigitos = (n) => {
      var cnt = 0;
      while (n > 0) { 
            n = parseInt(n / 10); 
            cnt++; 
      }
      return cnt;
}

const palindromo = (j) => {
      var a1 = j;
      var aux = 0;
      var inverso = 0;
  
      for (i = 0 ; i <= quantidadeDigitos(j) ; i++) {
        aux = Math.trunc(a1 / 10**i);
        inverso = inverso + Math.trunc(aux % 10);
      if (quantidadeDigitos(inverso) < quantidadeDigitos(a1)) {
              inverso = inverso * 10;
        }
      }
      if (a1 == inverso) {
            return true;
      } 
      else {
            return false;
      }
}

let n = 999;
let mult;

for (let i = 900; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
            mult = i * j;
            if (palindromo(mult)) {
                  console.log(mult);
            }
      }
}