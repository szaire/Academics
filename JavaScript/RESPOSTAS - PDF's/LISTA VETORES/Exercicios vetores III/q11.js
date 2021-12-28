function geraLetra()	{
	var opcoes = "ABCDE";
	var posicao =  parseInt(Math.random()*opcoes.length);
	return opcoes.charAt(posicao);
}

var n = 10;
var gabarito = [];
var respostas = [];
var cntRespostas = 0;

//a
for (let i = 0; i < n; i++) {
      gabarito[i] = geraLetra();
}

//c
for (let i = 0; i < n; i++) {
      respostas[i] = geraLetra(); 
}

//d
for (let i = 0; i < n; i++) {
      if (gabarito[i] == respostas[i]) {
            cntRespostas++;
      }
}

document.write(
      `
      gabarito: ${gabarito}<br>
      resposta: ${respostas}<br>
      `
      );
if (cntRespostas > 5) {
      document.write(`Parabéns você passou!`);
}
else {
      document.write(`Você ainda não conseguiu, mas está no caminho!`);
}