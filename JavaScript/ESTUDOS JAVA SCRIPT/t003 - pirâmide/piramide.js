let square = parseInt(prompt('Digite aqui altura da pirâmide:'));

for (let i = 0; i < square; i++){
     for (let j = 0; j <= i; j++){
          document.write('*');
     }
     document.write('<br>');
}