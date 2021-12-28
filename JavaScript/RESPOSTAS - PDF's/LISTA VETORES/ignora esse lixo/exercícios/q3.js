let n = parseInt(prompt(`Digite a quantidade desejada`));
let nomes = [];
let pesos = [];
let alturas = [];
let imc = [];

for (let i = 0; i < n; i++) {
      nomes[i] = prompt(`Digite o nome da pessoa ${i+1}`) 
      pesos[i] =  parseFloat(prompt(`Digite o peso de ${nomes[i]}`));
      alturas[i] =  parseFloat(prompt(`Digite a altura de ${nomes[i]}`));
}

for (let i = 0; i < n; i++) {
      imc[i] = pesos[i] / alturas[i]**2;
}

for (let i = 0; i < n; i++) {
      document.write(`IMC de ${nomes[i]} é: ${imc[i].toFixed(2)}<br>`);   
}