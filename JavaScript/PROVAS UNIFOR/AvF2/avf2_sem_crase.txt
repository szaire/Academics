let cargo = prompt('Digite o cargo no espaço abaixo:\n\n-Digite e para estagiário\n-Digite v para vendedor');
let diasTrab;
let salario;
let vendas;
let comissao;

if (cargo == 'e') {
     diasTrab = parseInt(prompt('Digite a quantidade de dias trabalhados:'));
     salario = parseFloat(30 * diasTrab);
     document.write('O salário de um estagiário que trabalhou por '+diasTrab+' dias é de: R$ '+salario.toFixed(2));
}

else if (cargo == 'v') {
     vendas = parseFloat(prompt('Digite o total de vendas (R$):'));
     comissao = vendas*0.1;
     salario = parseFloat(600 + comissao);
     document.write('O salário de um vendedor que vendeu R$ '+vendas+' é de: R$ '+salario.toFixed(2)+'<br>A comissão foi de R$ '+comissao);
}

else {
     alert("Digite o cargo para prosseguir com a operação! (f5 para tentar novamente).");
}