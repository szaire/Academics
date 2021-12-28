ehPar = (x) => {
      if (x % 2 == 0) {
            return true;
      }
      else {
            return false;
      }
}

let n = parseInt(prompt(`Digite o tamanho do vetor`));
let vetor = [];
let soma = 0;
let media;
let cnt = 0;
let vetor2 = [];
let vetorPar = [];
let vetorImpar = [];

for (let i = 0; i < n; i++) {
      vetor[i] = parseInt(prompt(`Digite o elemento ${i}`));
}
// a)
for (let i = 0; i < n; i++) {
      soma += vetor[i];
      cnt++;
}
document.write(`A soma dos elementos é: ${soma}<br>`);

// b)
media = soma / cnt;
document.write(`A média dos elementos é: ${media.toFixed(2)}<br>`);

// c)
vetor2 = vetor.sort((a, b) => a - b);
let ref = vetor2.length - 1;
let maiorNumero = vetor2[ref];
document.write(`O maior número é: ${maiorNumero}<br>`);

// d)
let menorNumero = vetor2[0];
document.write(`O menor número é: ${menorNumero}<br>`);

// e)
for (let i = 0; i < n; i++) {
      if (ehPar(vetor2[i])) {
            vetorPar.push(vetor2[i]);
      }
      else {
            vetorImpar.push(vetor2[i]);
      }
}
document.write(`Os números pares são: ${vetorPar.join(', ')}<br>`);

// f)
document.write(`A quantidade de números ímpares é: ${vetorImpar.length}<br>`);