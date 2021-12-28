let n = parseInt(prompt(`Digite um numero "n"`));
let fatorial = 1;

for (let i = 1; i <= n; i++) {            // num = 10
      fatorial *= i;                      // 1 * 2 * 3 * 4... * 10.
}
document.write(`${n}! = ${fatorial}`);