let product1 = [code, numUnit, price];
let product2 = [code, numUnit, price];
let price1 = product1[1] * product1[2]
let price2 = product2[1] * product2[2]
product1[0] = parseInt(prompt());
product1[1] = parseInt(prompt());
product1[2] = parseFloat(prompt());
product2[0] = parseInt(prompt());
product2[1] = parseInt(prompt());
product2[2] = parseFloat(prompt());
let priceTotal = price1 + price2;

console.log(priceTotal);