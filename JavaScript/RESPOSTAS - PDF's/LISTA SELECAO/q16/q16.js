let s = parseFloat(prompt('Type your wage:'));
let age = parseFloat(prompt('Type your age:'));
let tax;
let bonus;
let balance;

if (s > 2000) {
     tax = 0.3 * s;
}
else {
     tax = 0.2 * s;
}

if (age > 50) {
     bonus = 0.1 * s;
}
else {
     bonus = 0.05 * s;
}

balance = (s + bonus) - tax;
document.write(`Your final balance is ${balance.toFixed(2)} U$`);