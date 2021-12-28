ehPar = (n) => {
      if (n % 2 == 0) {
            return true;
      }
      else {
            return false;
      }
} 

fibonnacci = (n) => {
      let n1 = 0;
      let n2 = 1;
      let soma = 0;

      document.write(`${n1}, ${n2}, `);
      for (let i = 1; i <= n; i++) {
            let num = n1 + n2;
            n1 = n2;
            n2 = num;
            if (ehPar(n2)) {
                  soma += n2;
                  document.write(`${n2}, `);
            }
      }
      document.write(`<br>${soma}`);
}
fibonnacci(32);