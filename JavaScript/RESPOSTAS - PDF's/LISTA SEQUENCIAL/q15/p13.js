let numReal = parseFloat(prompt());
let parteInteira = parseInt(numReal);
let parteFracionada = (numReal - parteInteira).toFixed(2);
let arredondamento = Math.round(numReal);

document.write(parteInteira,'<br>');
document.write(parteFracionada,'<br>');
document.write(arredondamento,'<br>');