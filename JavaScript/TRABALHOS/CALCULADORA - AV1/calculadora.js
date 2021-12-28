let operacao = prompt('Digite a operação matemática requisitada dentre as opções: soma, subtração, multiplicação, divisão, maior, menor, potência, porcentagem, raiz quadrada, módulo. (ATENÇÃO: Atente-se para a digitação da operação!)'); //como fazer quebra de linha dentro de prompt???
let num1;
let num2;
let r;
if (operacao == "módulo") {
     num1 = parseFloat(prompt('Digite um número'));
     r = Math.abs(num1);
     document.write(`O módulo de ${num1} é ${r}.`);
}
else if (operacao == "raiz quadrada") {
     num1 = parseFloat(prompt('Digite um número'));
     r = Math.sqrt(num1);
     document.write(`A raiz quadrada de ${num1} é ${r}.`);
}
else if (operacao == "potência") {
     num1 = parseFloat(prompt('Digite um número'));
     num2 = parseFloat(prompt('Digite o expoente'));
     r = Math.pow(num1, num2);
     document.write(`${num1} ^ ${num2} = ${r}`);
}
else {
     num1 = parseFloat(prompt('Digite o primeiro número'));
     num2 = parseFloat(prompt('Digite o segundo número'));
     r = num1 + num2;
     
     if (operacao == "soma") {
          if (num1 < 0 && num2 >= 0) {
               r = num1 + num2;
               document.write(`- ${Math.abs(num1)} + ${num2} = ${r}`);
          }
          if (num1 < 0 && num2 < 0) {
               r = num1 + num2;
               document.write(`- ${Math.abs(num1)} + (${num2}) = ${r}`);
          }
          if (num1 >= 0 && num2 <= 0 ) {
               r = num1 + num2;
               document.write(`${num1} + (${num2}) = ${r}`);
          }
     }
     
     if (operacao == "subtração") {
          if (num1 < 0 && num2 >= 0) {
               r = num1 - num2;
               document.write(`- ${Math.abs(num1)} - ${num2} = ${r}`);
          }
          if (num1 < 0 && num2 < 0) {
               r = num1 - num2;
               document.write(`- ${Math.abs(num1)} - (${num2}) = ${r}`);
          }
          if (num1 >= 0 && num2 <= 0 ) {
               r = num1 - num2;
               document.write(`${num1} - ${Math.abs(num2)} = ${r}`);
          }
     }
     
     if (operacao == "multiplicação") {
          r = num1 * num2;
          document.write(`${num1} * ${num2} = ${r}`);
     }
     
     if (operacao == "divisão") {
          r = num1 / num2;
          document.write(`${num1} / ${num2} = ${r}`);
     }
     
     if (operacao == "maior") {
          r = num1 > num2;
          if (r == true) {
               document.write(`${num1} é maior que ${num2}.`);
          }
          else {
               document.write(`${num1} não é maior que ${num2}.`);
          }
     }
     
     if (operacao == "menor") {
          r = num1 < num2;
          if (r == true) {
               document.write(`${num1} é menor que ${num2}.`);
          }
          else {
               document.write(`${num1} não é menor que ${num2}.`);
          }
     }

     if (operacao == "porcentagem") {
          r = (num1 / num2) * 100.0;
          document.write(`${num1} / ${num2} = ${r}%`);
     }
}