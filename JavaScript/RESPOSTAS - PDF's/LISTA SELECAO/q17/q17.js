let burst1 = parseFloat(prompt('Type here the wind speed that the house 1 bears:'));
let burst2 = parseFloat(prompt('Type here the wind speed that the house 2 bears:'));
let burst3 = parseFloat(prompt('Type here the wind speed that the house 3 bears:'));
let nome; 

if (burst1 > burst2 && burst1 > burst3) {
     nome = 'Cícero'
     document.write(`${nome} has the strongest house`);
}
else if (burst2 > burst1 && burst2 > burst3) {
     nome = 'Prático'
     document.write(`${nome} has the strongest house`);
}
else if (burst3 > burst1 && burst3 > burst2) {
     nome = 'Heitor'
     document.write(`${nome} has the strongest house`);
}