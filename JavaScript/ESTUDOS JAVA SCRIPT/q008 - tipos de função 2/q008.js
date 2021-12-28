//tipos de função
//realiza uma tarefa e não devolve nada
//obs.: PARÂMETRO NADA TEM A VER COM VARIÁVEL!

function dizerNome() {
     console.log('Johnathan');
}

dizerNome();

function multiplicarDois(valor) {
     valor *= 2
     return valor;
}
console.log(multiplicarDois(5));

// mais experimentos #1
let resultado = multiplicarDois(10);
console.log(resultado);

// mais experimentos #2
function multiplicarDois1(valor, dois) {
     valor *= dois
     return valor;
}
let numero = 20;
let dobro = 2;
resultado = multiplicarDois(numero, dobro);
console.log(resultado);