/*
// digite numeros 5 vezes
for (var i = 1; i <= 5; i++) {
	var a = parseInt(prompt("digite um num"));
	document.write(a + "<br>");
}

// digite numeros n vezes
let n = parseInt(prompt('Digite a quantidade de números'));

for (var i = 1; i <= n; i++) {
	var a = parseInt(prompt("digite um num"));
	document.write(a + "<br>");
}
*/

// quantidade numeros n pares
let n = parseInt(prompt('Digite a quantidade de números'));

for (var i = 1; i <= n; i++) {
      var a = parseInt(prompt("digite um num"));
      if (a % 2 == 0) {
            document.write(a + "<br>");
      }
}