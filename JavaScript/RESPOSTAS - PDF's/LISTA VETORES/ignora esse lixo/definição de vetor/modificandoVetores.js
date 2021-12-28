let n = parseInt(prompt(`Digite a quantidade de elementos de um vetor`));

let vetor = [];

// for (let i = 0; i < n; i++) {
//       vetor[i] = parseInt(prompt(`Digite o valor do elemento ${i}`)); 
// }

// document.write(`${vetor}<br><br>`);

// para gerar números aleatórios dentro do vetor:
// for (let i = 0; i < n; i++) {
//       vetor[i] = parseInt(Math.random() * 101); 
// }

// document.write(`${vetor}<br><br>`);

//relação de vetores:

let idades = [];
let nomes = [];

for (let i = 0; i < n; i++) {
      nomes[i] = prompt(`Digite o nome da pessoa ${i+1}`)
      idades[i] = parseInt(prompt(`Digite a idade de ${nomes[i]}`)); 
}

for (let i = 0; i < n; i++) {
      document.write(`${nomes[i]} tem ${idades[i]} anos de idade<br>`); 
}