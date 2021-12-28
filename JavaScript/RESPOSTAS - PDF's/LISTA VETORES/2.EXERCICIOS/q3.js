var n = 5;
var produtos = ['Salgado', 'Sanduíche', 'Refrigerante', 'Suco', 'Água']
var quantidade = [];
var preco = [];
var valorTotal = 0;

for (let i = 0; i < n; i++) {
      quantidade[i] = parseInt(prompt(`Digite a quantidade do produto ${produtos[i]}`));
      preco[i] = parseFloat(prompt(`Digite o preço de ${produtos[i]}`));
      valorTotal += quantidade[i] * preco[i];
}

document.write(`Preço Total da comanda: ${valorTotal}`);