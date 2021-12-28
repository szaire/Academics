// o vetor é uma variável que armazena várias outras variáveis dentro dele
//exp:
let vetor = [1, 2, 3, 5, 67, 99];

document.write(`${vetor}<br><br>`);
document.write(`${vetor[5]}<br><br>`);

//exp2:
let i = 2;

document.write(`${vetor[i]}<br><br>`);

//exp3:
document.write(`${vetor.length}<br><br>`);

//exp4:
document.write(`${vetor}<br><br>`);

// o primeiro elemento de um vetor é considerado o elemento "0" para que
// facilite para o processador encontrar o elemento
// exp:
document.write(`vetor[3]: ${vetor[3]}<br><br>`);

// o processador irá pegar a ordem dentro das chaves e irá somar 0 + 3, nesse exemplo,
// para ssim encontrar o elemento da quarta posição do vetor

//exp5:
vetor[1] = "string";
document.write(`vetor[1]: ${vetor[1]}<br><br>`);

//exp6:
document.write(`vetor: ${vetor}<br><br>`);

vetor[5] = parseInt(prompt("Digite o novo valor da 6ª posição"));

document.write(`vetor: ${vetor}<br><br>`);

//exp7:
vetor[5+1] = parseInt(prompt("Digite o novo valor da 7ª posição"));