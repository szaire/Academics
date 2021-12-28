function parImpar(n) {
      return n % 2 == 0
}

function numPrimo(n) {
      var cnt = 0;
      for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                  cnt++
            }
      }
      return cnt == 2;
}

for (let i = 10; i <= 99; i++) {
      let p = parseInt(i / 10);
      let s = i % 10;
      if (parImpar(p) == true && numPrimo(s) == true) {
            document.write(`${i} <br>`);
      }
}