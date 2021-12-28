let n = parseInt(prompt(`Digite a quantidade desejada`));
let nomes = [];
let idades = [];
let alturas = [];

for (let i = 0; i < n; i++) {
      nomes[i] = prompt(`Digite o nome da pessoa`) 
      idades[i] =  parseInt(prompt(`Digite a idade de ${nomes[i]}`));
      alturas[i] =  parseFloat(prompt(`Digite a altura de ${nomes[i]}`));
}
for (let i = 0; i < n; i++) {
      document.write(`${nomes[i]} tem ${idades[i]} anos e ${alturas[i]}m de altura<br>`);   
}
