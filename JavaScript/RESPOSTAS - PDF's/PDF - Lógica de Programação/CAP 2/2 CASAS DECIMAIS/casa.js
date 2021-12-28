var eu = 25;
var adriano = 26;
var paulo = 32;
document.write("idade1: " + eu);
pl();
document.write("idade2: " + adriano);
pl();
document.write("idade3: " + paulo);
pl();
var total = eu + adriano + paulo;
var media = total/3;
document.write("A media das idades é: " + media.toFixed(2)) //impõe que o número de casas decimais será 2 
                                                           //(mas pode ser qualquer outro valor)

function pl() {
     document.write("<br><br>");
}