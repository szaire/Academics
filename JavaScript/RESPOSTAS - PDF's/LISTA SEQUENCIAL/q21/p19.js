let horas = parseInt(prompt('Digite as horas'));
let minutos = parseFloat(prompt('Digite os minutos'));

let h = horas + minutos / 60.0;
let m = horas * 60 + minutos;
let s = horas * 3600 + minutos * 60;

document.write(`horas: ${h}<br>`);
document.write(`minutos: ${m}<br>`);
document.write(`segundos: ${s}<br>`);