let classe = parseInt(prompt('Type the consumer class (1, 2 or 3):'));
let time = parseFloat(prompt('Type the time spent (hours):'));
let kwh;

if (classe == 1) {
     kwh = time * 1;
     document.write(`The payment bill will show ${kwh.toFixed(2)} U$`);
}
else if (classe == 2) {
     kwh = time * 0.8;
     document.write(`The payment bill will show ${kwh.toFixed(2)} U$`);
}
else if (classe == 3) {
     kwh = time * 0.5;
     document.write(`The payment bill will show ${kwh.toFixed(2)} U$`);
}

else {
     document.write(`Digite`);
}