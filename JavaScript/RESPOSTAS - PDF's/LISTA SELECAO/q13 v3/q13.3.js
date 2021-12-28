let s = parseFloat(prompt('Indique seu salário'));
let r;
let sFinal;
let imp;
let sDesc;
let classe;

if (s > 0) {
     r = s*0.15;
     sFinal = s + r;
}
else if (s >= 400.01) {
     r = s*0.12;
     sFinal = s + r;
}

else if (s >= 800.01) {
     r = s*0.10;
     sFinal = s + r;
}

else if (s >= 1200.01) {
     r = s*0.07;
     sFinal = s + r;
}

else if (s >= 2000.01) {
     r = s*0.04;
     sFinal = s + r;
}

else {
     document.write(`Coloque um valor maior que 0!`);
}

document.write(`Seu salário original é ${s}<br><br>`);
document.write(`Seu novo salário é ${sFinal}`);

//QUESTÃO B
if (sFinal > 1000) {
     imp = sFinal * 0.10;
     sDesc = sFinal - imp; 
}
else {
     imp = sFinal * 0.05;
     sDesc = sFinal - imp;  
}
document.write(
     `<br><br>O imposto cobrado é R$ ${imp}
     <br> O salario  do imposto é R$ ${sDesc}`
     );    

//QUESTÃO C
if (sDesc < 500) {
     classe = "C";
}
else if (sDesc >= 500 && sDesc < 1000) {
     classe = "B"
}
else if (sDesc >= 1000) {
     classe = "A"
}
document.write(`<br><br>Classe: ${classe}`);

// OBS: BUSCAR SEMPRE COLOCAR O DOCUMENT.WRITE NO FINAL DA SEQUÊNCIA CONDICIONAL