let n = parseInt(prompt(`Digite n`));
let nomes = [];
let idades = [];
let alturas = [];

for (let i = 0; i < n; i++) {
      nomes[i] = prompt(`Digite o nome do ${i+1}º cadastrado`);
      idades[i] = parseInt(prompt(`Digite a idade de ${nomes[i]}`));
      alturas[i] = parseFloat(prompt(`Digite a altura de ${nomes[i]}`));
}

for (let i = 0; i < n; i++) {
      document.write(`${nomes[i]} tem ${idades[i]} anos e ${alturas[i].toFixed(2)}m de altura<br>`); 
}