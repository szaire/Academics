const possuiNumero = (vetor, num) => {
      for (let i = 0; i < vetor.length; i++) {
            if (vetor[i] == num) {
                  return true;
            }
      }
      return false;
}

let arr = [1, 2, 3, 4];
const num = 2;

console.log(possuiNumero(arr, num));