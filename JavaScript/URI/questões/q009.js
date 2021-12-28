let name = lines.shift();
const salary = parseFloat(lines.shift());
let sell = parseFloat(lines.shift());
let salaryTotal = salary + sell*0.15;

console.log('TOTAL = R$ '+salaryTotal.toFixed(2));