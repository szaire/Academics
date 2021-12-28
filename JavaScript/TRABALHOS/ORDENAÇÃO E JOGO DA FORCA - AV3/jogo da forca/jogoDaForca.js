const sortearPalavra = () => {
      index = Math.floor(Math.random() * 10 + 1);
      return index;
}

var palavra = [`BOLA`, `QUADRADO`, `CAMARÃO`, `MESA`, `ÁGUA`, `PORTA`, `VENTILADOR`, `GATO`, `VACA`, `LIVRO`];
var dica = [`É REDONDA`, `TEM LADOS IGUAIS`, `VIVE NO MAR`, `SUSTENTA COISAS`, `ESSENCIAL PARA O SER HUMANO`, `ELA ABRE`, `DÁ UMA BRISA...`, `MEOW`, `DÁ LEITE`, `ESSENCIAL PARA APRENDER`];

var sorteio = SortearPalavra();
var palavraSorteada = palavra[sorteio];
var dicaSorteada = dica[sorteio];
var palavraEscondida = [];
var letrasUsadas = ["Nenhuma letra usada"];

var tentativa;
var chances = 7;
var cnt = 0;

if (window.confirm("Você quer começar o jogo?")) {

      palavraSorteada.split('') // transforma string em vetor
      for (let i = 0; i < palavraSorteada.length; i++) {
            palavraEscondida[i] = "_"
      }

      // INTERFACE
      while (chances > 0) {

            tentativa = prompt(
                  `
                  Palavra: ${palavraEscondida.join('  ')}
                  Letras usadas: ${letrasUsadas}

                  CHANCES: ${chances}
                  `
                  );

            // checa se é a letra correta
            for (var i = 0; i < palavraSorteada.length; i++) {
                  if (tentativa == palavraSorteada[i]) {
                        palavraEscondida[i] = palavraSorteada[i];
                  }
                  else {
                        
                  }
            }
      }
      // if para caso tenha perdido
}
else {
      document.write(`*Shut Down do Windows XP :(*`);
}