let nome = 'Samuel';
let idade = 25; 
let estaAprovado = true;
let sobrenome;
let pedirInformacao;

// objeto: uma série de informações armazenadas 
// (obs: nada tem a ver com as variáveis!)
let pessoa = { 
       nome: null,
       sobrenome: ' Zaire Rocha',
       idade: 18,
       estaAprovado: true,
       corOlhos: 'verde',
       status: 'vivo',
       comidaPreferida: 'macarrão com queijo',
};

//é possível interagir com os dados do objeto
function mostra(frase) {
       document.write(frase+'<br><br>');
}

// O objetivo funciona como um diretório de dados,
// tudo que está dentro da variável pode ser definido
// por meio da seguinte forma. Exemplo:
pessoa.nome = prompt('Digite seu nome:');
mostra(pessoa.nome);
pessoa.comidaPreferida = prompt('Digite aqui sua comida favorita:');
mostra(pessoa.comidaPreferida);


// outros testes#1:
console.log(pessoa);
mostra('Seu nome é ' + pessoa.nome + pessoa.sobrenome + ", você tem " + pessoa.idade + " anos.");