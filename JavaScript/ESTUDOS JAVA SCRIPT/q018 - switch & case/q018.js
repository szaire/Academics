let cargo = prompt('Digite aqui o cargo (comum, gerente ou diretor)');

switch (cargo) {
     case 'comum':
          document.write('O usuário solicitado é comum');
          break;
          
     case 'gerente':
          document.write('O usuário solicitado é gerente');
          break;
               
     case 'diretor':
          document.write('O usuário solicitado é diretor');
          break;
                    
     default:
     document.write('Nenhum cargo solicitado!');
     break;
}