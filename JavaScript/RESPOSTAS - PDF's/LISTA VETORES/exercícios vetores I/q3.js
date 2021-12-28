var n = parseInt(prompt(`Digite n`));
var nomes = [];
var pesos = [];
var alturas = [];
var IMC = [];

for (let i = 0; i < n; i++) {
      nomes[i] = prompt(`Digite o nome do ${i+1}º cadastrado`);
      pesos[i] = parseInt(prompt(`Digite o peso de ${nomes[i]}`));
      alturas[i] = parseFloat(prompt(`Digite a altura de ${nomes[i]}`));
}

for (let i = 0; i < n; i++) {
      IMC[i] = pesos[i] / Math.pow(alturas[i], 2); 
}

for (let i = 0; i < n; i++) {
      document.write(`${nomes[i]} tem IMC ${IMC[i].toFixed(2)}<br>`); 
}