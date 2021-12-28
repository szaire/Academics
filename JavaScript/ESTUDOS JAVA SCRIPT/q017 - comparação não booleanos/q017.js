// Comparação de não booleanos

//Falsey (valores que são tidos como falsos):
// undefined
// null 
// 0
// false
// ''
// NaN (not a number)

// Truthy (valores que são tidos como verdadeiros)
// (o contrário do Falsey)

let corPadrao = 4 > 3;
let corNova = 4 < 3;
let corPersonalizada = 'vermelho';
console.log(corNova && corPadrao); // não faz sentido usar operadores lógicos em strings!!!
console.log((false && true) || true);
// fazer pergunta sobre isso ^ !!!