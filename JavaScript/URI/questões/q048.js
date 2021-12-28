let prompt = () => {return lines.shift()};
let salario = parseFloat(prompt());
let salarioFinal;
let reajusteGanho;
let percentual;


if (salario >= 0 && salario <= 400.00) {
      salarioFinal = salario + salario * 0.15;
      reajuste = salarioFinal - salario;
      percentual = 15;
}
if (salario >= 400.01 && salario <= 800.00) {
      salarioFinal = salario + salario * 0.12;
      reajuste = salarioFinal - salario;
      percentual = 12;
}
if (salario >= 800.01 && salario <= 1200.00) {
      salarioFinal = salario + salario * 0.10;
      reajuste = salarioFinal - salario;
      percentual = 10;
}
if (salario >= 1200.01 && salario <= 2000.00) {
      salarioFinal = salario + salario * 0.07;
      reajuste = salarioFinal - salario;
      percentual = 7;
}
if (salario > 2000.00) {
      salarioFinal = salario + salario * 0.04;
      reajuste = salarioFinal - salario;
      percentual = 4;
}

console.log(`Novo salario: ${salarioFinal.toFixed(2)}`);
console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`);
console.log(`Em percentual: ${percentual} %`);