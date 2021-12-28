var a = lines.shift();
var b = lines.shift();
var A = a.split(" ");
var B = b.split(" ");

var mediaA = parseInt(A[1]) * parseFloat(A[2]);
var mediaB = parseInt(B[1]) * parseFloat(B[2]);

console.log(`VALOR A PAGAR = R$ ${(mediaA+mediaB).toFixed(2)}`);
// template strings: são strings que permitem expressões embutidas
// Você pode utilizar string multi-linhas e interpolação de string com elas.