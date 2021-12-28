function fibo(n) {
      let a = 0;
      let b = 1;
      
      for (let i = 1; i <= n; i++) {
            let c = a + b;
            document.write(`${a} `);
            a = b;
            b = c;
      }
}

let n = parseInt(prompt(`Digite a quantidade de termos`));
fibo(n);