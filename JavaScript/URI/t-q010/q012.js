let product1 = {
     code : null,
     numUnit : null,
     priceUnit : null,
};
let product2 = {
     code : null,
     numUnit : null,
     priceUnit : null,
};

product1.code = parseInt(prompt());
product1.numUnit = parseInt(prompt());
product1.priceUnit = parseInt(prompt());

product2.code = parseInt(prompt());
product2.numUnit = parseInt(prompt());
product2.priceUnit = parseInt(prompt());

let price1 = product1.numUnit * product1.priceUnit; 
let price2 = product2.numUnit * product2.priceUnit; 
let sumPrice = price1 + price2;

console.log(sumPrice);