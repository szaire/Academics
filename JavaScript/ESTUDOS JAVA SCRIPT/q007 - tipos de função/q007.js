//function
//regra de nome: verbo + substantivo
//obs.: PARÂMETRO NADA TEM A VER COM VARIÁVEL!

//fução sem parâmetro
let corSite = 'azul';
function resetaCor() {
       corSite = null; //"" = null
}

console.log(corSite); // corSite = 'azul'
resetaCor(); // corSite = null
console.log(corSite); // null

//função com parâmetro
corSite = 'azul';
function resetaCor1(cor) {
       corSite = cor;
}

console.log(corSite); // corSite = 'azul'
resetaCor1('vermelho'); // cor = 'vermelho'
console.log(corSite); // corSite = cor = 'vermelho' 

//função com mais de um parâmetro
corSite = 'azul';
function resetaCor2(cor, tonalidade) {
       corSite = cor+" "+tonalidade;
}

console.log(corSite);
resetaCor2('verde', 'claro');
console.log(corSite);

//tarefa de casa:
let nome = prompt("Digite aqui seu nome: ")
function escreveTexto(frase) {
       document.write(frase + nome)
}
escreveTexto("Seu nome é ");