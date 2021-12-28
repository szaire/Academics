class Produto {
      setNomeProduto(nomeProduto) {
            this.nomeProduto = nomeProduto;
      }
      setQuantidade(quantidade) {
            this.quantidade = quantidade;
      }
      setPreco(preco) {
            this.preco = preco;
      }
      constructor() {} //linha 17
}
let n = 5;
let soma = 0;
let comanda = [];

par = x => {
      
}

for (let i = 0; i < n; i++) {
      comanda[i] = new Produto();
}
comanda[0].setNomeProduto('Salgado');
comanda[1].setNomeProduto('Sanduiche');
comanda[2].setNomeProduto('Refrigerante');
comanda[3].setNomeProduto('Suco');
comanda[4].setNomeProduto('Água');
// é possível colocar funções dentro de classes

for (let i in comanda) {
      let quantidade = parseInt(prompt(`Digite a quantidade de ${comanda[i].nomeProduto}`));
      let preco = parseFloat(prompt(`Digite o preço de ${comanda[i].nomeProduto}`));
      comanda[i].setQuantidade(quantidade);
      comanda[i].setPreco(preco);
}
// é possível colocar variaveis dentro dos construtores e sets

for (let i = 0; i < n; i++) {
      soma += comanda[i].preco * comanda[i].quantidade; 
}

// array =/= objeto, 
// um objeto é uma variável com várias informações
// um array é um colecionador de dados

// for (let i = 0; i < n; i++) {
//       let quantidade = parseInt(prompt(`Digite a quantidade de ${comanda[i].nomeProduto}`));
//       let preco = parseFloat(prompt(`Digite o preço de ${nomeComanda[i].nomeProduto}`));
//       comanda[i] = new Array (quantidade, preco); --> não faz sentido 
//       soma += parseFloat(comanda[i][0] * comanda[i][1]);
// }

for (let i = 0; i < n; i++) {
      document.write(`${comanda[i].nomeProduto}:<br>`)
      document.write(`Quantidade: ${comanda[i].quantidade} unid.<br>`);
      document.write(`Preço: ${comanda[i].preco.toFixed(2)}$.<br><br>`);
}

document.write(`Valor total da comanda: ${soma.toFixed(2)}$`);

// duvidas: por que não consigo usar a comanda e tive que que criar um array somente para o nome?
// resolvido