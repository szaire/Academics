let v = parseInt(prompt('Quantos jogos o SFC venceu?'));
let e = parseInt(prompt('Quantos jogos o SFC empatou?'));
let d = parseInt(prompt('Quantos jogos o SFC perdeu?'));
let pV = v*3;
let pE = e;
let pD = d*0;
let pontos = calculaPontos2();

if (pontos > 28) {
     document.write('Nosso time está bem!');
}
else if (pontos == 28) {
     document.write('Nosso time está empatado!')
}
else {
     document.write('Nosso time não está bem!');
}

document.write(pontos);

function calculaPontos() {
     let p = pV + pE + pD;
     return p;
}

function calculaPontos2() {
     let situacao = v*3 + e + d*(-1);
     return situacao;
}