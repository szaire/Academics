let ordem = prompt().split(" ").map(num => parseInt(num));
let [a, b, c] = ordem;
let [n1, n2, n3] = ordem.sort((a, b) => a - b);

console.log(`${n1}`);
console.log(`${n2}`);
console.log(`${n3}`);
console.log(``);
console.log(`${a}`);
console.log(`${b}`);
console.log(`${c}`);