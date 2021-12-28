let num1 = parseFloat(prompt('Digite aqui a primeira nota:'));
let num2 = parseFloat(prompt('Digite aqui a segunda nota:'));
let mediaPond = (((num1*2)+(num2*3))/5).toFixed(2); 

function mostra(frase) {
     document.write(frase+'<br><br>');
}

mostra('A média ponderada é: '+mediaPond);