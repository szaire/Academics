function geraLetra()	{
	var opcoes = "ABCDE";
	var posicao =  parseInt(Math.random()*opcoes.length);
	return opcoes.charAt(posicao);
}

var respostas = [];
var gabarito = ['A', 'A', 'B', 'D', 'C', 'A', 'E', 'E', 'C', 'B'];
var cnt = 0;

for (let i = 0; i < 10; i++) {
      respostas[i] = geraLetra();
}

for (let i = 0; i < 10; i++) {
      if (respostas[i] == gabarito[i]) {
            cnt++;
      }
}

document.write(`${gabarito}<br>`);
document.write(`${respostas}<br>`);

if (cnt > 5) {
      document.write(`Você passou parabéns!`);
}
else {
      document.write(`Vai repetir >:( !`);
}