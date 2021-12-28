let tanque = 40;
let caminhoGas = 480;
let caminhoAl = 300;
let consumoGas = caminhoGas/tanque;
let consumoAl = caminhoAl/tanque
let precoGas = 2.90;
let precoAl = 2.40;
let precoKmGas = precoGas/consumoGas;
let precoKmAl = precoAl/consumoAl;
document.write('Seu consumo de gasolina foi de: ' + consumoGas + ' km/l');
document.write('<br>');
document.write('Seu consumo de álcool foi de: ' + consumoAl + ' km/l');
document.write('<br>');
document.write('Preço por kilômetro de gasolina: ' + precoKmGas.toFixed(2) + '$/km');
document.write('<br>');
document.write('Preço por kilômetro de álcool: ' + precoKmAl.toFixed(2) + '$/km');
document.write('<br>');
document.write('O quanto foi gasto com gasolina: ' + caminhoGas * precoGas + ' $');
document.write('<br>');
document.write('O quanto foi gasto com álcool: ' + caminhoAl * precoAl + ' $');
document.write('<br>');
document.write('<br>');
if (precoKmGas > precoKmAl) {
     document.write('Preço da gasolina vale mais à pena!')
}
else {
     document.write('Preço  do álcool vale mais à pena!')
}