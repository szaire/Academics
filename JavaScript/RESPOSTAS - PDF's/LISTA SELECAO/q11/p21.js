let a = parseInt(prompt()); 
let b = parseInt(prompt()); 
let c = parseInt(prompt()); 
let d = parseInt(prompt());

if (b > c && d > a && c+d > a+b && c > 0 && d > 0 && a%2 == 0) { //se pelo menos uma expressão for falsa, toda a expressão será desconsiderada!
     document.write(`valores aceitos!`);
}

else {
     document.write(`Valores negados!`)
}