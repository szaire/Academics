var tanque = 40;
var camigas = 480;
var camial = 300;
var consugas = camigas/tanque;
var consual = camial/tanque;

//As funções são úteis para executar ordens para elas estabelecidas
function pl() {
     document.write("<br><br>"); 
}

//Esse tipo de função mostra o que estiver escrito dentro dos seus parênteses
function dados(frase) {
     document.write(frase + "<br>");
}

function resultado(frase) {
     document.write(frase + "<br><hr><br>");
}

dados("capacidade do tanque: " + tanque + " L");
dados("caminho percorrido: " + camigas + " km"); 
resultado("O cosumo de gasolina por quilometro foi de: " + consugas + " km/L");
dados("capacidade do tanque: " + tanque + " L");
dados("caminho percorrido: " + camial + " km");
resultado("O cosumo de gasolina por quilometro foi de: " + consual + " km/L")