var prompt = () => {return lines.shift();};
var entrada = prompt().split(" ").map(z => parseInt(z));

var [h1, m1, h2, m2] = entrada;


var deltaH = (h2 - h1);
var deltaMin = (m2 - m1);

if(deltaMin < 0){
    deltaMin += 60;
    deltaH--;
}
if(deltaH < 0){
    deltaH += 24;
}
if(h1 == h2 && m1 == m2){
    console.log("O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)");
}else{
    console.log("O JOGO DUROU "+deltaH+" HORA(S) E " +deltaMin+ " MINUTO(S)");
}