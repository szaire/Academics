const ehPar = (n) => {
      if (n % 2 == 0) {
            return true
      }
      return false
}

var n = parseInt(prompt(``));
var vet = [];
var soma = 0;
var media;
var numPar = [];
var cntImpar = 0;

for (let i = 0; i < n; i++) {
      vet[i] = parseInt(prompt(`Digite o elemento ${i}`)); 
}

// a
for (let i = 0; i < n; i++) {
      soma += vet[i];
}

// b
media = soma / vet.length;

//c 
var max = vet[0]
for (let i = 0; i < vet.length; i++) {
      if (vet[i] > max) {
            max = vet[i];
      }
}

//d
var min = vet[vet.length - 1]
for (let i = 0; i < n; i++) {
      if (vet[i] < min) {
            min = vet[i];
      }
}

//e, f
for (let i = 0; i < n; i++) {

      // let pos = 0;

      if (ehPar(vet[i])) {
            numPar[i - cntImpar] = vet[i];
      } 

      /* OUTRA RESOLUÇÃO:
      if (V[i]%2 == 0) {
		pares[pos] = V[i];
		pos++;
	}
      */

      else {
            cntImpar++;
      }
}

document.write(
      `
      soma: ${soma}<br>
      media: ${media}<br>
      maior numero: ${max}<br> 
      menor numero: ${min}<br>
      numeros pares: ${numPar}<br>
      quantidade de numeros impares: ${cntImpar} 
      `
      );