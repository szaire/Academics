let quantidade = parseInt(prompt());
let horas = parseInt(quantidade / 60); // inteiro = horas
// let horas = (quantidade / 60).toFixed(0); // --> pode ser utilizado também para se adquirir o valor inteiro
let minutos = quantidade % 60; // resto = minutos

document.write(horas,'h : ',minutos,'min');

// (!!!) IMPORTANTE:
// numero % 2 é igual a 0          (PAR) even
// numero % 2 é diferente de 0     (ÍMPAR) odd
// numero % 2 é igual a 1          (ÍMPAR) odd