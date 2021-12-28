let p = parseFloat(prompt('Digite seu peso:'));
let a = parseFloat(prompt('Digite sua altura:'));
let imc = p/a**2;

if (imc < 18.5) {
     document.write('Está abaixo do peso!');
}

if (imc >= 18.5) {
     if (imc <= 35) {
          document.write('Está no peso ideal.');    
     }
     else {
          document.write('Está acima do peso!');
     }
}