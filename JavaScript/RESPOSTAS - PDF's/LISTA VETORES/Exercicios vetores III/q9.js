var n = 2;
var produtos = [];
var preco = [];
var cntMenos50 = 0;
var nomesEntre50_100 = [];
var pos = 0;
var somaAcima100 = 0;
var cntAcima100 = 0;
var mediaAcima100;

//ponto 1
for (let i = 0; i < n; i++) {
      produtos[i] = prompt(`Digite produto ${i+1}`) 
}

for (let i = 0; i < n; i++) {
      preco[i] = parseFloat(prompt(`Digite preço produto ${produtos[i]}`)); 
      
      //a
      if (preco[i] < 50) {
            cntMenos50++;
      }
      
      //b
      else if (preco[i] >= 50 && preco[i] <= 100) {
            nomesEntre50_100[pos] = produtos[i];
            pos++;
      }
      
      else if (preco[i] > 100) {            
            somaAcima100 += preco[i];
            cntAcima100++
      }
}
mediaAcima100 = somaAcima100/cntAcima100;

document.write(
      `
      produtos: ${produtos}<br>
      preço: ${preco}<br>
      <br>
      Quantidade menor que 50 REal: ${cntMenos50}<br>
      Nome dos produto entre 50 e 100 real: ${nomesEntre50_100}<br>
      Média dos preços: ${mediaAcima100}
      `
      );

