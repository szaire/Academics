function selectionSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) { 
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
// Descrição geral do Selection sort: Esse algoritmo sempre vai buscar o menor elemento para cada posição de i e organizá-lo no seu devido lugar.

/*

Linha 1: Declaramos a função "selectionSorAt" que irá receber, como parâmetro, um vetor de entrada.

Linha 2: Declaramos uma variável responsável por armazenar o tamanho do vetor.

Linha 3: Utilizamos o tamanho do vetor para determinar quantas vezes o código, dentro do escopo do For, 
será repetido, seguindo a lógica correspondente à posição do elemento, começando por i = 0.

Linha 4: A partir de agora o algoritmo tentará descobrir a posição do menor elemento do vetor. Para isso, 
uma variável "min" será responsável por armazenar a posição do vetor (i), inicializando na posição 
"atual". Nesse caso, a variável inicializa com valor de i = 0, ou seja, a primeira posição do vetor, 
sendo essa a posição que armazena o menor elemento até que se prove o contrário .

Linha 5: Essa estrutura de selação é responsável por "descobrir" o menor elemento do vetor. A variável min, 
agindo como posição no vetor (e inicializando com valor igual a i), irá ser comparada com os elementos 
na posição j que, por ser inicializada com valor i+1, encontra-se numa posiçao logo imediatamente posterior 
ao elemento de arr[min]. 
Caso a condição seja confirmada em que o elemento de arr[min] seja maior que o elemento de arr[j], significa, 
então, que "min", nossa variável para achar o menor elemento, não está armazenando o menor elemento atualmente. 
Logo, min receberá o valor de j, que representa um elemento menor.
Após esse recebimento e incremento do valor de j para que ele represente uma posição posterior, a estrutura "for" 
irá se repetir (contanto que esse valor de j represente uma posição que exista no vetor por meio de j < len). 
Assim, o vetor será percorrido de forma que, ao final dessa repetição, min tenha o valor da posição de menor elemento. 
Quando o valor de j for incrementado a um ponto que não existe mais no vetor, saímos da estrutura de repetição e 
realizaremos a troca de forma que o elemento em min ocupe a posição correspondente à ordenação crescente 
dos elemenetos do vetor.

Linha 10: A estrutura de seleção irá checar se o min (a posição do elemento de menor valor) atualmente está 
comportando um valor correspondente a posição indicada pelo i no vetor. Pois, caso o menor elemento já se 
encontre na posição esperada, não há necessidade de realizar as trocas dentro do escopo dessa estrutura. 
Por exemplo, se i = 0 e a posição do menor valor encontrado (min) também for 0, não há necessidade de trocas. 
Caso o obedeça a condição, ou seja, min diferente de i, A seguinte troca será realizada:

Linha 11: É criada uma variável temporária "tmp" que armazenará o elemento que está na posição i (atual). 
Dessa forma, quando formos realizar a troca, esse valor, arr[i], não será perdido. 

Linha 12: Aqui é onde começa a troca. Basicamente, o algoritmo posiciona o elemento de menor valor na 
posição i (atual), organizando-o, enfim.

Linha 13: Aqui é onde termina a troca. A variável temporária desempenha o papel de fornecer para a 
posição min o elemento anteriormente armazenado na posição i.

OBS: A primera vez que o selection sort percorre o vetor, ele acha o menor elemento de todos. Ou seja,
na segunda vez que ele percorrer ele não vai achar o menor elemento de todo o vetor, mas sim, o segundo menor.
Na terceira vez que percorrer, ele acha o terceiro menor e assim por diante. 

*/