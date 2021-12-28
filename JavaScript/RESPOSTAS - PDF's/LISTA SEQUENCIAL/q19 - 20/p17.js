let f = parseFloat(prompt('Digite aqui sua temperatura (Fº)'));
let c = (f * (5/9) - 32).toFixed(2);
let k = (f * (5/9) + 273.15).toFixed(2);

document.write(`Sua temperatura (Fº) em graus celsius é: ${c} Cº<br>`);
document.write(`Sua temperatura (Fº) em kelvin é: ${k} K`);