let entrada = prompt().split(" ").map(x => parseFloat(x));
let [A, B, C] = entrada;
let delta = Math.pow(B, 2) + (-4 * A * C);
let R1 = ((-B + Math.sqrt(delta)) / (2 * A)); 
let R2 = ((-B - Math.sqrt(delta)) / (2 * A)); 

if (A == 0 || delta < 0) {
      console.log(`Impossivel calcular`);
}
else {
      console.log(`R1 = ${R1.toFixed(5)}`);
      console.log(`R2 = ${R2.toFixed(5)}`);
}