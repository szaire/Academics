//Arrays - Conjunto de dados que pode ser acessado por um índice
let familia = [26, 45, 50, 'nomeQualquer', 17, null, false];

console.log('tamanho do array: ' + familia.length);
console.log(familia);

//tarefa de casa:

function mostra(frase) {
       document.write(frase + "<br>");
}

let colega = ['Ronald', 18, 'Fortaleza', 'CE']
console.log(colega);

mostra("nome: " + colega[0]);
mostra("idade: " + colega[1] + " anos");
mostra("cidade: " + colega[2] + "-" + colega[3]);