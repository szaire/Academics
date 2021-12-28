let num = parseFloat(prompt('Digite aqui um número:'));
let cube = Math.pow(num, 3); // Math.pow faz exponenciação
let root = Math.sqrt(num); // Math.sqrt faz raiz quadrada

function mostra(frase) {
     document.write(frase,'<br><br>');
}

mostra('Seu número ao quadrado é: '+cube);
mostra('A raiz quadrada de  é: '+root);