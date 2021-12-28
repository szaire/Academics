// Uma pequena loja de artesanato possui apenas um vendedor e comercializa dez tipos de objetos. O
// vendedor recebe, mensalmente, salário de R$ 545,00, acrescido de 5% do valor total de suas vendas.
// O valor unitário dos objetos deve ser informado e armazenado em um vetor; a quantidade vendida de
// cada peça deve ficar em outro vetor, mas na mesma posição. Crie um programa que receba os preços
// e as quantidades vendidas, armazenando-os em seus respectivos vetores (ambos com tamanho dez).
// Depois, determine e mostre:
// ✅ um relatório contendo: quantidade vendida, valor unitário e valor total de cada objeto. Ao final,
// deverão ser mostrados o valor geral das vendas e o valor da comissão que será paga ao vendedor; e
// ✅ o valor do objeto mais vendido e sua posição no vetor (não se preocupe com empates).

let n = parseInt(prompt(`Digite a quantidade de objetos da loja`));
let salarioMensal = 545.00
let vendasGeral = 0;
let comissao; 
let objetoValor = [];
let objetoQnt = [];
let objMaiorQnt = -Infinity;
let objMaisVend;
let posicao;

for (let i = 0; i < n; i++) {
      objetoValor[i] = parseFloat(prompt(`Digite o valor do objeto ${i+1}`)); 
      objetoQnt[i] = parseInt(prompt(`Digite a quantidade vendida do objeto ${i+1}`));
      if (objetoQnt[i] > objMaiorQnt) {
            objMaiorQnt = objetoQnt[i];
            objMaisVend = objetoValor[i];
            posicao = i;
      }
}

for (let i = 0; i < n; i++) {
      let valorTotal = parseFloat(objetoValor[i] * objetoQnt[i]);
      document.write(`Objeto ${i+1} -> Quantidade vendida: ${objetoQnt[i]} / Valor unitário: ${objetoValor[i].toFixed(2)}$ / Valor total: ${valorTotal.toFixed(2)}$<br>`); 
      vendasGeral += valorTotal;
}
comissao = 0.05 * vendasGeral;

document.write(`Valor geral das vendas: ${vendasGeral.toFixed(2)}$ / Valor da comissão: ${comissao.toFixed(2)}$<br>`);
document.write(`Valor do objeto mais vendido: ${objMaisVend.toFixed(2)}$ / Posição do objeto mais vendido: ${posicao}<br>`);