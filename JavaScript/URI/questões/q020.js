let n = parseInt(prompt(`Digite os dias de vida dessa pessoa`)); // lines.shift()
let years = Math.trunc(n/365);
let months = Math.trunc((n % 365) / 30);
let days = (n % 365) % 30;

console.log(`${years} ano(s)`);
console.log(`${months} mes(es)`);
console.log(`${days} dia(s)`);