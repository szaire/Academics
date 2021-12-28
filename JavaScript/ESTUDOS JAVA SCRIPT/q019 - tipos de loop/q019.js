/* 
No java script nós temos 5 tipos de loop:
1. for
2. while
3. do... while
4. for... in
5. for... of
*/

function pl() {
     document.write('<br><hr><br>');
}

// FOR LOOP:
for (let i = 0; i < 5; i++) {
     document.write(`Este é o laço for!, ${i}<br>`);
}

pl();

for (let i = 5; i > 0; i--) {
     document.write(`Este é o laço for!, ${i}<br>`);
}

pl();

//forma anternativa:
for (let i = 1; i <= 5; i++) {
     document.write(`Este é o laço for!, ${i}<br>`);
}

pl();

// Com operador módulos: (NÃO FICOU CLARO A COMPREENSÃO, VER COM O ROMMEL!)
for (let i = 0; i <= 10; i++) {
     if (i % 2 == 0) {
          document.write(`${i}<br>`);
     }
}

for (let i = 0; i <= 10; i += 2) {
     document.write(`${i}<br>`);
}

pl();

// WHILE LOOP:
let i = 0;

while (i <= 5) {
     document.write(`Este é o laço While!: ${i}<br>`);
     i++;
}

pl();

// DO... WHILE:
i = 0;

do {
     document.write(`Este é o laço Do-While!: ${i}<br>`);
     i++;
} while (i < 10)

// FOR... IN //NÃO ENTENDI, NÃO FICOU CLARO!
const pessoa = {
     nome: 'Samuel',
     idade: 18,
}

for (let key in pessoa) {

}