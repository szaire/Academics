/*
Faça um algoritmo que recebe um inteiro n.
Mostre "é primo" ou "não é primo".
*/

// Se é primo ou não:
let n = parseInt(prompt('Digite um número'));
let cnt = 0;

for (let i = 1; i <= n; i++) {
      if (n % i == 0) {
            cnt++;
      }
}
if (cnt == 2) {
      document.write(`${n} é um número primo!`);
}
else {
      document.write(`${n} não é um número primo!`);
}

// "Quais" são os números primos:
let n = parseInt(prompt('Digite um número:'));
for (var i = 1; i <= n; n++) {
	var cnt = 0;

	for (var i = 1; i <= n; i++) {
		if (n % i == 0) {
			cnt++;
		}
	}

	if (cnt == 2) {
		document.write(n + " é primo <br>");
	} else {
		document.write(n + " não é primo <br>");
	}
}