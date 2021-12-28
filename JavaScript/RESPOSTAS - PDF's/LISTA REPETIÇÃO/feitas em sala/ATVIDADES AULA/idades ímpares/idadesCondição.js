let qnt = prompt('Digite a quantidade de pessoas');

for (let i = 1; i <= qnt; i++) {
      let nome = prompt('Digite o nome');
      let idade = prompt('Digite a idade');
      if (idade > 18) {
            document.write(`Nome: ${nome} <br> Idade: ${idade}`);
            document.write(`<br><br>`);
      }
      
}