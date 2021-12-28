// Operador NOT (!)
// irá questionar a declaração TRUE ou FALSE em questão
// obs.: O operador NOT sempre será contrário ao operador boolean!

let maiorIdade = false;             
let carteiraDeTrabalho = true;     
let podeAplicar = maiorIdade && carteiraDeTrabalho;
let candidatoRecusado = !podeAplicar;
console.log(podeAplicar);
console.log(candidatoRecusado);

maiorIdade = true;             
carteiraDeTrabalho = false;     
podeAplicar = maiorIdade || carteiraDeTrabalho;
candidatoRecusado = !podeAplicar;
console.log(podeAplicar);
console.log(candidatoRecusado);