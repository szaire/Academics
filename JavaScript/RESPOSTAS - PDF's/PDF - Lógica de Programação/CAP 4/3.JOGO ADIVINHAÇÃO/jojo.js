let randomNumber = Math.random(10) * 10;
let thoughtNumber = parseInt((randomNumber));
let chute = parseInt(prompt('Pensei em número, consegue advinhar qual é?'));
if (chute == thoughtNumber) {
     document.write(`Acertou!`);
}
else {
     document.write(`Errou! eu pensei no ${thoughtNumber}`);
}