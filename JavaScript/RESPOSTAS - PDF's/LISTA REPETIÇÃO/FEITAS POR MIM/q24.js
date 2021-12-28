let n = parseInt(prompt(`Digite a quantidade de bandas`));
let maiorNum = -Infinity;
let maiorBanda;

for (let i = 1; i <= n; i++) {
      let nomeBanda = prompt(`Digite o nome da banda ${i}`);
      let num = parseInt(prompt(`Digite a quantidade de integrantes da banda ${i}`));
      if (num > maiorNum) {
            maiorBanda = nomeBanda;
            maiorNum = num;
      }
}

document.write(
      `
      A banda com maior quantidade de integrantes é: ${maiorBanda}<br>
      A quantidade de integrantes é: ${maiorNum}
      `
      );