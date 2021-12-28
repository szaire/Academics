// ponto 2.1
function numeroDeCupons(n) {
      return parseInt(n / 10);
}

//ponto 1
var n = parseInt(prompt(`Digite a quantidade de tipos de produtos`));
var descricao = [];
var valorUnitario = [];
var quantidade = [];
var fragil = [];
var quantidadeVetores = 4;
var cntCupom = 0;
var soma = 0; // ponto 2.2
var maiorValorUnitario = -Infinity;
var produtoMaiorValorUnitario;
var cntNaoFrageis_15 = 0;

for (let i = 0; i < n; i++) {
      descricao[i] = prompt('Qual o produto?');
      valorUnitario[i] = parseFloat(prompt(`Qual o valor unitario de ${descricao[i]}?`));
      quantidade[i] = parseInt(prompt(`Qual a quantidade de ${descricao[i]}?`));
      fragil[i] = prompt(`O produto ${descricao[i]} é fragil?\nS - Sim\nN - Não`);
      soma += valorUnitario[i] * quantidade[i];
      if (valorUnitario[i] > maiorValorUnitario && fragil[i] == 'S') {
            maiorValorUnitario = valorUnitario[i];
            produtoMaiorValorUnitario = descricao[i];
      }
      if (valorUnitario[i] < 15 && fragil[i] == 'N') {
            cntNaoFrageis_15++;
      }
}

for (let i = 0; i < n; i++) {
      document.write(`${descricao[i]}, ${valorUnitario[i]}, ${quantidade[i]}, ${fragil[i]}<br>`);
}
document.write(`<br>`);

//ponto 2
var cupom10 = numeroDeCupons(soma);
document.write(`O cliente tem direito a ${cupom10} cupons para concorrer a um carro!<br>`);

//ponto 3
document.write(`Descrição do produto frágil com maior valor unitário: ${produtoMaiorValorUnitario}<br>`);

//ponto 4
document.write(`A quantidade de produtos não frágeis com valor unitário abaixo de R$ 15,00 é: ${cntNaoFrageis_15}<br>`);

//ponto 5
var operacao = 0;
for (let i = 1; i <= quantidadeVetores; i++) {
      operacao++;
      var aux = 0;
      var pos = n;
      var index = pos - 1;
      if (operacao == 1) {
            for (let i = 0; i < n; i++) {
                  aux = descricao[index]
                  descricao[pos] = aux;
                  pos--;
                  index--;
            }
            descricao[0] = '';
      }
      if (operacao == 2) {
            for (let i = 0; i < n; i++) {
                  aux = valorUnitario[index]
                  valorUnitario[pos] = aux;
                  pos--;
                  index--;
            }
            valorUnitario[0] = '';
      }
      if (operacao == 3) {
            for (let i = 0; i < n; i++) {
                  aux = quantidade[index]
                  quantidade[pos] = aux;
                  pos--;
                  index--;
            }
            quantidade[0] = '';
      }
      if (operacao == 4) {
            for (let i = 0; i < n; i++) {
                  aux = fragil[index]
                  fragil[pos] = aux;
                  pos--;
                  index--;
            }
            fragil[0] = '';
      }
}

descricao[0] = prompt('Qual o NOVO produto?');
valorUnitario[0] = parseFloat(prompt(`Qual o valor unitario de ${descricao[0]}?`));
quantidade[0] = parseInt(prompt(`Qual a quantidade de ${descricao[0]}?`));
fragil[0] = prompt(`O produto ${descricao[0]} é fragil?\nS - Sim\nN - Não`);

document.write(
      `
      <br>
      ${descricao}<br>
      ${valorUnitario}<br>
      ${quantidade}<br>
      ${fragil}<br>
      `);