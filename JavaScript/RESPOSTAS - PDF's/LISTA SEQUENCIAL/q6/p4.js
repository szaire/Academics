let raio = parseFloat(prompt('Digite aqui o raio do seu círculo:'));
let area = ((Math.PI*(raio**2))).toFixed(2);

// Math.PI = 3.1415...;

mostra('A area do circulo é: '+area);
area = (Math.PI).toFixed(2)*Math.pow(raio, 2);
mostra('A area do circulo é: '+area);
area = Math.PI*Math.pow(raio, 2);
mostra('A area do circulo é: '+area);
area = Math.round(Math.PI*Math.pow(raio, 2));
mostra('A area do circulo é: '+area);

function mostra(frase) {
     document.write(frase+'<br>');
}