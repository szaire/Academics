let s = parseFloat(prompt('Digite o salario'));
let aum = parseFloat(prompt('Digite o percentual de aumento (%)'));
let aumPercent = s * (aum / 100.0);
let novoS = s + aumPercent;

document.write (`
      Seu novo salário é: ${novoS}<br>
      O aumento foi de: ${aumPercent}<br>
      O percentual foi de: ${aum}%`
      );