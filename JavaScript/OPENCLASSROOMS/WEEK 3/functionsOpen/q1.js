soma = (total, num) => {
      return total + num;
}

// function soma (total, num) {
//       return total + num;
// }

let n = parseInt(prompt(`How many people watched the show?`));
let avarage;
let score = [];

alert('Write their scores')
for (let i = 0; i < n; i++) {
      let star = parseInt(prompt(`Score of person ${i+1}`));
      score.push(star); 
}

avarage = score.reduce(soma) / score.length; // método reduce para somar termos dentro de um array!
document.write(`The avarage score for the show is: ${avarage.toFixed(1)}`);