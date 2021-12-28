// função .split()
// esta função permite substituir um elemento da string com um referencial,
// simplificando, é possível dividir uma string quanto quizermos com
// um caractere de espaço (" "). Na execução da função, a variável que
// suporta a string se tornará um Array.

// exemplo:
let nomeCompleto = prompt('Digite aqui seu nome:');
let parts = nomeCompleto.split(' ');

let nome = parts[0];
let sobrenome = parts[1];

document.write('Seu nome é: '+nome+' '+sobrenome);
console.log(parts);

// outros experimentos:
let perg = prompt("Nome do meio, por favor!");
let nome = "Fernanda Bastos";
let parts = nome.split(" ").join(' '+perg+' ');
document.write(parts);

