//variável 'let' ou 'var' servem para declararmos uma variável
let idade = 5;
console.log(idade);
let altura = 1.80;
console.log(altura);
let nome = 'samuel';
console.log(nome);
// seguir a forma de nome: camelCase
// não usar números no início do nome

// obs1.: isso resultará em 'undefined' (no caso do 'var') 
// ou 'ReferenceError' (no caso do 'let'):
console.log(a);
var a = 100;

// escopo = o conjunto de códigos como um todo
// bloco = delimitado entre '{' e '}'

// obs2.: variáveis do tipo 'var' são declaradas no escopo da função
// como um todo. exemplo:
function exemplo1() {
     i; // existe
     for (var i = 0; i < 10; i++) {
          i; // existe
     }
     i; // existe
}

// obs3.: variáveis let são declaradas apenas no bloco em que
// se encontram. exemplo:
function exemplo2() {
     i; // não existe
     for (let i = 0; i < 10; i++) {
          i; // existe
     }
     i; // não existe!
} 

// obs3.1.: caso uma variável let seja declara dentro do bloco de uma
// função, ela também pode ser declarada em blocos conseguintes
// pertencentes à função:
function exemplo3() {
     let varExemplo; // existe
     i // não existe!
     for (let i = 0; i < 10; i++) {
          varExemplo; // existe
          i; // existe
     }
     varExemplo; //existe
     i; // não existe!
} 

// obs4.: não se pode declarar uma variável let novamente,
// seja var ou let. exemplo:
let name = 'Akira';
var name = 'Toriyama';