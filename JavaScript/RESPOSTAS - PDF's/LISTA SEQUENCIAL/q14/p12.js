let peso = parseFloat(prompt('Digite aqui seu peso:'));
let pesoGordo = peso*1.15;
let pesoMagro = peso*0.80;

document.write(`${pesoGordo.toFixed(0)}kg<br>${pesoMagro}kg`);