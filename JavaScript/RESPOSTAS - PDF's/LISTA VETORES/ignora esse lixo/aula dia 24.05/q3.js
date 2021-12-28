function geraLetra()	{
	var opcoes = 'ABCDE';
	var posicao =  parseInt(Math.random()*opcoes.length);
	return opcoes.charAt(posicao);
}

var g = [];
var r = [];
var n = 10;
var cntA = 0;
var cntB = 0;
var cntC = 0;
var cntD = 0;
var cntE = 0;
var cntCertas = 0;

//a
for (let i = 0; i < n; i++) {
      g[i] = geraLetra(); 
}

//c
for (let i = 0; i < n; i++) {
      r[i] = geraLetra(); 
}
//b
for (let i = 0; i < n; i++) {
      if (g[i] == 'A') { 
            cntA++;
      }
      else if (g[i] == 'B') {
            cntB++;
      }
      else if (g[i] == 'C') {
            cntC++;
      }
      else if (g[i] == 'D') {
            cntD++;
      }
      else if (g[i] == 'E') {
            cntE++;
      }
}

for (let i = 0; i < n; i++) {
      if (g[i] == r[i]) {
            cntCertas++;
      }
}
document.write(`Respostas: ${r}<br>`);
document.write(`Gabarito: ${g}<br>`);
document.write(`Pontos: ${cntCertas}<br>`);
if (cntCertas < 7) {
      document.write(`Reprovado!<br>`);
}
else {
      document.write(`Aprovado!<br>`);
}