let multiplo = lines.shift().split(" ").map(x => parseInt(x));
let [n1, n2] = multiplo.sort((a, b) => a - b);

if (n2 % n1 === 0) {
      console.log(`Sao Multiplos`);
}
else {
      console.log(`Nao sao Multiplos`);
}