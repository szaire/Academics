let c = parseFloat(prompt('Digite aqui sua temperatura (Cº)'));
let f = c * (9/5) + 32;
let k = c + 273.15;

document.write(`Sua temperatura (Cº) em graus fahrenheit é: ${f} Fº<br>`);
document.write(`Sua temperatura (Cº) em kelvin é: ${k} K`);