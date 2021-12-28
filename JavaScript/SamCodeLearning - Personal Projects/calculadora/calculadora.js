let operacao = prompt("Qual operação você deseja realizar? Escolha entre: \n • soma \n • subtração \n • multiplicação \n • divisão \n • potência \n • porcentagem \n • radiciação \n • comparação \n • módulo \n (Atente para os acentos, cedilhas e letras minúsculas das palavras)");
let n1;
let n2;
let r;

switch (operacao) {
      case 'soma':
            n1 = parseFloat(prompt('Digite o primeiro número'));
            n2 = parseFloat(prompt('Digite o segundo número'));
            r = n1 + n2;
            if (n1 >= 0 && n2 >= 0) {
                  document.write(`${n1} + ${n2} = ${r}`);
            }
            else if (n1 >= 0) {
                  if (n2 < 0) {
                        document.write(`${n1} + (${n2}) = ${r}`);
                  }
            }
            else if (n1 < 0) {
                  if (n2 >= 0) {
                        document.write(`(${n1}) + ${n2} = ${r}`);
                  }
            }
            else if (n1 < 0 && n2 < 0) {
                  document.write(`(${n1}) + (${n2}) = ${r}`);
            }
            break;
            
      case 'subtração':
            n1 = parseFloat(prompt('Digite o primeiro número'));
            n2 = parseFloat(prompt('Digite o segundo número'));
            r = n1 - n2;
            if (n1 >= 0 && n2 >= 0) {
                  document.write(`${n1} - ${n2} = ${r}`);
            }
            else if (n1 >= 0) {
                  if (n2 < 0) {
                        document.write(`${n1} - (${n2}) = ${r}`);
                  }
            }
            else if (n1 < 0) {
                  if (n2 >= 0) {
                        document.write(`(${n1}) - ${n2} = ${r}`);
                  }
            }
            else if (n1 < 0 && n2 < 0) {
                  document.write(`(${n1}) - (${n2}) = ${r}`);
            }
            break;
            
      case 'multiplicação':
            n1 = parseFloat(prompt('Digite o primeiro número'));
            n2 = parseFloat(prompt('Digite o segundo número'));
            r = n1 * n2;
            if (n1 >= 0 && n2 >= 0) {
                  document.write(`${n1} * ${n2} = ${r}`);
            }
            else if (n1 >= 0) {
                  if (n2 < 0) {
                        document.write(`${n1} * (${n2}) = ${r}`);
                  }
            }
            else if (n1 < 0) {
                  if (n2 >= 0) {
                        document.write(`(${n1}) * ${n2} = ${r}`);
                  }
            }
            else if (n1 < 0 && n2 < 0) {
                  document.write(`(${n1}) * (${n2}) = ${r}`);
            }
            break;
            
      case 'divisão':
            n1 = parseFloat(prompt('Digite o primeiro número'));
            n2 = parseFloat(prompt('Digite o segundo número'));
            r = n1 / n2;
            if (n1 >= 0 && n2 >= 0) {
                  document.write(`${n1} / ${n2} = ${r}`);
            }
            else if (n1 >= 0) {
                  if (n2 < 0) {
                        document.write(`${n1} / (${n2}) = ${r}`);
                  }
            }
            else if (n1 < 0) {
                  if (n2 >= 0) {
                        document.write(`(${n1}) / ${n2} = ${r}`);
                  }
            }
            else if (n1 < 0 && n2 < 0) {
                  document.write(`(${n1}) / (${n2}) = ${r}`);
            }
            break;

      case 'potência':
            n1 = parseFloat(prompt('Digite a base (primeiro número)'));
            n2 = parseFloat(prompt('Digite o expoente (segundo número)'));
            r = Math.round(n1, n2);
            if (n1 < 0) {
                  document.write(`(${n1}) ^ ${n2} = ${r}`);
            }
            else {
                  document.write(`${n1} ^ ${n2} = ${r}`);
            }
            break;

      case 'porcentagem':
            n1 = parseFloat(prompt('Digite a porcentagem (%)'));
            n2 = parseFloat(prompt('Digite o número'));
            r = (n1/100) * n2;
            document.write(`${n1}% de ${n2} é igual a: ${r}`);
            break;

      case 'radiciação':
            n1 = parseFloat(prompt('Digite o radicando'));
            n2 = parseFloat(prompt('Digite o índice'));
            if (n2 != 0 && n2 > 0) {
                  if (n2 != 2) {
                        if (n2 % 2 == 0) {
                              if (n1 >= 0) {
                                    r = Math.pow(n1, 1/n2);
                                    document.write(`raiz ${n2}ª de ${n1} é igual a ${r}`);
                              }
                              else {
                                    document.write(`Não existe raiz de índice par para radicando menor que 0. Aperte f5 para tentar novamente.`);
                              }
                        }
                        else {
                              if (n1 >= 0) {
                                    r = Math.pow(n1, 1/n2);
                                    document.write(`raiz ${n2}ª de ${n1} é igual a ${r}`);
                              }
                              else {
                                    r = Math.pow(Math.abs(n1), 1/n2);
                                    document.write(`raiz ${n2}ª de (${n1}) é igual a (${-r})`);
                              } 
                        }
                  }
                  else{
                        if (n1 >= 0) {
                              r = Math.sqrt(n1);
                              document.write(`√${n1} = ${r}`);
                        }
                        else {
                              document.write(`Não existe raiz de índice par para radicando menor que 0. Aperte f5 para tentar novamente.`);
                        }
                  }
            }
            else {
                  document.write(`Digite um índice positivo ou diferente de zero!`);
            }
            break;

      case 'comparação':
            n1 = parseFloat(prompt('Digite o primeiro número'));
            n2 = parseFloat(prompt('Digite o segundo número'));
            if (n1 > n2) {
                  document.write(`${n1} é maior que ${n2}.`);
            }            
            else if (n1 < n2) {
                  document.write(`${n1} é menor que ${n2}.`);
            }            
            else {
                  document.write(`${n1} é igual a ${n2}.`);
            }
            break;

      case 'módulo':
            n1 = parseFloat(prompt('Digite o número que queira calcular o módulo'))
            r = Math.abs(n1);
            document.write(`|${n1}| = ${r}`);
            break;
};