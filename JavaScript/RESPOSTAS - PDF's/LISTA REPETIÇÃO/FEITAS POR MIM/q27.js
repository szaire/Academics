let n = parseInt(prompt(`Digite a quantidade de bandas "n"`));
let qntBandas_5 = 0;
let qntBandaIndie = 0;
let maiorLucro = 0;
let menorLucro = 0;
let maxShows = 0;
let menosShows = 0;
let nomeBandaMenosShows;
let somaInt = 0;
let qnt_1_33 = 0;
let media;
let somaLucro = 0;
let qntBandas = 0;

for (let i = 1; i <= n; i++) {
      let nomeBanda = prompt('Digite o nome da banda');
      let tipoMusica = prompt('Digite o tipo de música da banda');
      let numIntegrante = parseInt(prompt('Digite o número de integrantes da banda'));
      let lucro = parseInt(prompt('Digite o lucro da banda na última turnê'));
      let qntShows = parseInt(prompt('Digite a quantidade de shows da banda'));

      // ponto 1
      if (numIntegrante == 5) {
            qntBandas_5++;
      }

      // ponto 2
      if (tipoMusica == 'indie') {
            qntBandaIndie++;
      }

      //ponto 3
      if (lucro > maiorLucro) {
            maiorLucro = lucro;
      }
      
      //ponto 4
      if (lucro < maiorLucro) {
            menorLucro = lucro;
      }

      //ponto 5
      if (qntShows > maxShows) {
            maxShows = qntShows;
      }

      if (qntShows < maxShows) {
            menosShows = qntShows;
            nomeBandaMenosShows = nomeBanda;
      }

      //ponto 6
      somaInt += numIntegrante;

      //ponto 7
      if (numIntegrante > 1 && qntShows > 33) {
            qnt_1_33++;
      }

      //ponto 8
      somaLucro += lucro;
      qntBandas++;
}
media = somaLucro / qntBandas;

document.write(
      `
      A quantidade de bandas que tem exatamente 5 integrantes é: ${qntBandas_5}<br>
      A quantidade de bandas do tipo indie é: ${qntBandaIndie}<br>
      O maior lucro obtido por uma banda é: ${maiorLucro}<br>
      O menor lucro obtido por uma banda é: ${menorLucro}<br>
      O nome da banda que fez menos shows é: ${nomeBandaMenosShows}. Ela fez ${menosShows} shows<br>
      A soma dos integrantes da banda é: ${somaInt}<br>
      A quantidade de bandas que possuem mais de um integrante e fizeram mais de 33 shows: ${qnt_1_33}<br>
      A média do lucro geral é: ${media} 
      `
      );