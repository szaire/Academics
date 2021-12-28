prompt = () => {
      return lines.shift()
};

let taxon1 = prompt();
let taxon2 = prompt();
let taxon3 = prompt();

if (taxon1 == 'vertebrado') {
      if (taxon2 == 'ave') {
            if (taxon3 == 'carnivoro') {
                  console.log('aguia')
            }
            else { // onivoro
                  console.log('pomba')
            }
      }
      else { // mamífero
            if (taxon3 == 'onivoro') {
                  console.log('homem')
            }
            else { // herbivoro
                  console.log('vaca')
            }
      }
}
else { // invertebrado
      if (taxon2 == 'inseto') {
            if (taxon3 == 'hematofogo') {
                  console.log('pulga')
            }
            else { // herbivoro
                  console.log('lagarta')
            }
      }
      else { // anelideo
            if (taxon3 == 'hematofogo') {
                  console.log('sanguessuga')
            }
            else { // onivoro
                  console.log('minhoca')
            }
      }
}