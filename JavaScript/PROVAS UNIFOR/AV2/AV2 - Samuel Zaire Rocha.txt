let n = parseInt(prompt(`Digite o número de países visitados:`));
let diasMin = Infinity;
let gastoMaxAsia = 0;
let nomeAsia;
let mediaGastosEU = 0;
let soma = 0;
let cntEU = 0;
let transporteMaisUtilizado;
let cntCarro = 0;
let cntAviao = 0;
let cntNavio = 0;

for (let i = 1; i <= n; i++) {
      //ponto 1
      let nome = prompt(`[PAÍS ${i}] Digite o nome do ${i}º país:`);
      let continente = prompt(`[PAÍS ${i}] Digite o continente do ${i}º país:`);
      let gasto = parseFloat(prompt(`[PAÍS ${i}] Digite os gastos totais em ${nome} (${continente}):`));
      let estadia = parseInt(prompt(`[PAÍS ${i}] Digite a quantidade de dias que passou em ${nome} (${continente}):`));
      let transporte = prompt(`[PAÍS ${i}] Digite o meio de transporte utilizado em ${nome} (${continente}):\n● C - Carro\n● A - Avião\n● N - Navio`);

      //ponto 2
      if (estadia < diasMin) {
            diasMin = estadia;
      }

      //ponto 3
      if (continente == "Ásia") {
            if (gasto > gastoMaxAsia) {
                  gastoMaxAsia = gasto;
                  nomeAsia = nome;
            }
      }

      //ponto 4
      if (continente == "Europa" && transporte == "N") {
            soma += gasto;
            cntEU++;
      }
      else {
            soma = 0;
            cntEU = 1;
      }

      //ponto 5
      if (transporte == "C") {
            cntCarro++;
      }
      if (transporte == "A") {
            cntAviao++;
      }
      if (transporte == "N") {
            cntNavio++;
      }

      //ponto 5.1
      if (cntCarro > cntAviao && cntCarro > cntNavio) {
            transporteMaisUtilizado = "Carro";
      }
      else if (cntAviao > cntCarro && cntAviao > cntNavio) {
            transporteMaisUtilizado = "Avião";
      }
      else if (cntNavio > cntCarro && cntNavio > cntAviao) {
            transporteMaisUtilizado = "Navio";
      }
      else {
            transporteMaisUtilizado = "-X-";
      }
      
}
//ponto 4.1
mediaGastosEU = soma / cntEU;

document.write(`A menor duração de dias que o viajante permanceu em um país foi: ${diasMin} dias<br>`);
document.write(`A maior despesa que o viajante teve em um país asiático foi de: ${gastoMaxAsia} no país: ${nomeAsia} $<br>`);
document.write(`A média dos gastos no continente europeu cujo transporte utilizado foi navio é: ${mediaGastosEU} $<br>`);
document.write(`O meio de transporte mais utilizado pelo viajante foi: ${transporteMaisUtilizado}<br>`);