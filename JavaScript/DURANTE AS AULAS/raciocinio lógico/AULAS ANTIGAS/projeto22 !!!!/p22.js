let p = parseFloat(prompt('Digite o peso')); 
let h = parseFloat(prompt('Digite a altura')); 
let imc = p/Math.pow(h, 2);

// estrutura de seleção padrão (menos eficiente! pois a estrutura de seleção 
// checará todas as condicionais!)
if (imc < 18.5) { // se usássemops <=, caso o imc desse 18.5, seria utilizados duas condições e não apenas uma 
     document.write(`Abaixo do peso!`);
}
if (imc >= 18.5 && imc <= 35) {
     document.write(`Peso ideal, no limite!`)
}
if (imc > 35) { // se usássemops <=, caso o imc desse 18.5, seria utilizados duas condições e não apenas uma 
     document.write(`Acima do peso!`)
}

// estrutura em cadeado/aninhado (mais eficiente! pois a estrutura de seleção 
// checará em ordem crescente dos valores!)
if (imc < 18.5) { // se usássemops <=, caso o imc desse 18.5, seria utilizados duas condições e não apenas uma 
     document.write(`Abaixo do peso!`);
}
else {
     if (imc >= 18.5 && imc <= 35) {
          document.write(`Peso ideal, no limite!`)
     }
     else {
          if (imc > 35) { // se usássemops <=, caso o imc desse 18.5, seria utilizados duas condições e não apenas uma 
               document.write(`Acima do peso!`)
          }
     }
}
