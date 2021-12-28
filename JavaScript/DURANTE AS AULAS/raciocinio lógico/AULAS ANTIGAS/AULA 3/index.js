function resetaNum() {
     a = 25;
}
function pular() {
     document.write("<br><br>");
}

var a = 25;
var b = 5;
document.write('soma: ',a+b,'<br>');
document.write('subtração: ',a-b,'<br>');
document.write('multiplicação: ',a*b,'<br>');
document.write('divisão: ',a/b,'<br>');
document.write('resto: ',a%b,'<br>');
document.write('exponenciação: ',a+b+b,'<br><br>')

a = 30;
b = 4;
document.write('soma: ',a+b,'<br>');
document.write('subtração: ',a-b,'<br>');
document.write('multiplicação: ',a*b,'<br>');
document.write('divisão: ',a/b,'<br>');
document.write('resto: ',a%b,'<br>'),
document.write('exponenciação: ',a+b+b,'<br><br>')

//equações
a = 5;
b = 3;
let c;

c = a - b * 2;
document.write('valor de c é: ',c,'<br>'); // vai multiplicar primeiro e depois subtrair
c = (a - b) * 2;
document.write('valor de c é: ',c); // vai subtrair primeiro e depois multiplicar 
pular();

//concatenação
a = 18;
document.write('Minha idade é: ', a);