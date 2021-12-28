let n = parseInt(prompt(`Digite a quantidade de países visitados:`));
let nome = [];
let continente = [];
let totalGasto = [];
let quantidadeDias = [];
let transporte = [];

for (let i = 0; i < n; i++) {
      nome[i] = prompt(`[PAÍS ${i+1}] Digite o nome do país ${i+1}`);
      continente[i] = prompt(`[PAÍS ${i+1}] Digite o continente do país ${nome[i]}`);
      totalGasto[i] = parseFloat(prompt(`[PAÍS ${i+1}] Digite o total gato no país ${nome[i]}`));
      quantidadeDias[i] = parseInt(prompt(`[PAÍS ${i+1}] Digite a quantidade de dias que passou no país ${nome[i]}`));
      transporte[i] = prompt(`[PAÍS ${i+1}] Digite o transporte utilizado no país ${nome[i]}:\nC - Carro\nA - Avião\nN - Navio`);
}

let min = quantidadeDias[0];
for (let i = 0; i < n; i++) {
      if (quantidadeDias[i] < min) {
            min = quantidadeDias[i];
      } 
}

let max = quantidadeDias[0];
for (let i = 0; i < n; i++) {
      if (quantidadeDias[i] > max) {
            max = quantidadeDias[i];
      } 
}

let maiorGasto = totalGasto[0];
var nomePaisAsia;
for (let i = 0; i < n; i++) {
      if (totalGasto[i] > maiorGasto && continent[i] == 'Ásia') {
            maiorGasto = totalGasto[i];
            nomePaisAsia = nome[i];
      } 
}

let mediaEuropa;
let soma = 0;
let cnt = 0;
for (let i = 0; i < n; i++) {
      if (continente[i] = 'Europa' && transporte[i] == 'N') {
            soma += totalGasto[i];
            cnt++
      } 
}
mediaEuropa = soma / cnt;

let transpMaisUtilizado;
let cntC = 0;
let cntA = 0;
let cntN = 0;
for (let i = 0; i < n; i++) {
      if (transporte[i] == 'C') {
            cntC++;
      } 
      else if (transporte[i] == 'A') {
            cntA++;
      }
      else if (transporte[i] == 'N') {
            cntN++;
      }
}

for (let i = 0; i < n; i++) {
      if (cntC > cntA && cntC > cntN) {
            transpMaisUtilizado = 'Carro';
      }
      if (cntA > cntC && cntA > cntN) {
            transpMaisUtilizado = 'Avião';
      }
      if (cntN > cntC && cntN > cntA) {
            transpMaisUtilizado = 'Navio';
      }
}
