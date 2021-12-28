let a = 10;
let b = 3.14;
let c; // variável criado para armazenar o valor de umas das variáveis

document.write(`a = ${a}<br>b = ${b}`);

// operações de atribuição para troca
c = a; // c = 10
a = b; // a = 3.14
b = c; // b = 10

// pula 3 linhas apenas
for (let i = 0; i < 3; i++) {
      document.write(`<br>`);
}

// resultado final
document.write(`a = ${a}<br>b = ${b}`);