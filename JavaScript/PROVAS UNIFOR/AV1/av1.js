// 1º ponto
let preco = parseFloat(prompt('Digite aqui o preço (R$) do produto:'));
let paisOrigem = parseInt(prompt('Digite aqui o país de origem desse produto:\n\n1 - Estados Unidos\n2 - México\n3 - Outros')); // CORREÇÃO: PARSEINT FDP!!!!!!
let transporte = prompt('Digite aqui o meio de transporte desse produto:\n\nT - Terrestre\nF - Fluvial\nA - Aéreo');
let cargaPerigosa = prompt('O produto porta uma carga perigosa?\n\nS - Sim\nN - Não');

// 2º ponto
let i;
let porcentagem;
if (preco <= 100) {
      porcentagem = '5%';
      i = preco * 0.05;
}
else {
      porcentagem = '10%';
      i = preco * 0.10;
}
document.write(`O imposto de ${porcentagem} sobre o produto é de: R$ ${i.toFixed(2)}<br><br>`);

// 3º ponto
let valorTransporte
if (cargaPerigosa == 'S') {
      if (paisOrigem == 1) {
            valorTransporte = 50;
      }
      else if (paisOrigem == 2) {
            valorTransporte = 21;
      }
      else if (paisOrigem == 3) {
            valorTransporte = 24;
      }
}

else {
      if (paisOrigem == 1) {
            valorTransporte = 12;
      }
      else if (paisOrigem == 2) {
            valorTransporte = 21;
      }
      else if (paisOrigem == 3) {
            valorTransporte = 60;
      }
}
document.write(`O valor do transporte sobre o produto é de: R$ ${valorTransporte.toFixed(2)}<br><br>`);

//4º ponto
let seguro;
if (paisOrigem != 2 || transporte == 'A') {
      seguro = i / 2;
}
else {
      seguro = valorTransporte * 2;
}
document.write(`O valor do seguro é de: R$ ${seguro.toFixed(2)}<br><br>`);

//5º ponto
let precoFinal = preco + i + valorTransporte + seguro;
document.write(`O preço final a ser pago é de: R$ ${precoFinal.toFixed(2)}`);