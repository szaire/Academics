let vitoria = parseInt(prompt('Digite aqui o número de vitórias'));
let empate = parseInt(prompt('Digite aqui o número de empates'));
let derrota = parseInt(prompt('Digite aqui o número de derrotas'));;
let somaPontos = (vitoria*3) + (empate*1) + (derrota*0); 

if (somaPontos > 28) {
     document.write(`Temos ${somaPontos} pontos ao todo, estamos bem!`)
}

if (somaPontos < 28) {
     document.write(`Temos ${somaPontos} pontos ao todo, não estamos bem!`)
}

if (somaPontos == 28) {
     document.write(`Temos ${somaPontos} pontos ao todo, estamos razoáveis!`)
}