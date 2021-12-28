let n1 = parseFloat(prompt('Digite a nota 1'));
let p1 = parseFloat(prompt('Digite o peso 1'));
let n2 = parseFloat(prompt('Digite a nota 2'));
let p2 = parseFloat(prompt('Digite o peso 2'));
let n3 = parseFloat(prompt('Digite a nota 3'));
let p3 = parseFloat(prompt('Digite o peso 3'));
let media = (n1 * p1 + n2 * p2 + n3 * p3) / (p1 + p2 + p3);

document.write(`A média ponderada é ${media.toFixed(2)}`);