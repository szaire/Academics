let anoNasc = parseInt(prompt('Digite aqui o ano que você nasceu: '));
let anoAtual = parseInt(prompt('Digite aqui o ano atual: '));
let aniv = prompt('Você já fez aniversário? ');
let idade = anoAtual - anoNasc;

if (aniv == 's') {
     document.write('Você tem ',idade,' anos de idade<br>');
     document.write('Você terá ',((2050 - anoAtual)+idade),' anos em 2050');
}
else {
     document.write('Você tem ',(idade-1),' anos de idade<br>');
     document.write('Você terá ',((2050 - anoAtual)+idade),' anos em 2050');
}