//Variável é uma determinação
var ano = 2012;
document.write("ano");
pularlinha();
document.write(ano);
pularlinha();
document.write("Eu nasci em : " + (ano - 25) + "<br>");
document.write("Eu nasci em : " + (ano - 36) + "<br>");
document.write("Eu nasci em : " + (ano - 27) + "<br>");
document.write("<br><br>");


var eu = 25;
var adriano = 26;
var paulo = 32;
var total = eu + adriano + paulo;
document.write("A soma das idades é: " + total);
pularlinha();

var total = eu + adriano + paulo;
var media = total/3;
document.write("A media das idades é: " + media);

function pularlinha() {
     document.write("<br><br><br>")
}