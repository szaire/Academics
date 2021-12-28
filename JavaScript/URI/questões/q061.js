// prompt = () => {return lines.shift()}

let d1 = parseInt(prompt(`Dia `));
let horario1 = prompt().split(` `).map(x => parseInt(x));
let d2 = parseInt(prompt(`Dia `));
let horario2 = prompt().split(` `).map(x => parseInt(x));

let [h1, m1, s1] = horario1;
let [h2, m2, s2] = horario2;

let deltaS = s2 - s1;
let deltaM = m2 - m1;
let deltaH = h2 - h1;
let deltaD = d2 - d1;

if (deltaS < 0) {
      deltaS += 60;
      deltaM--;
}
if (deltaM < 0) {
      deltaM += 60;
      deltaH--;
}
if (deltaH < 0) {
      deltaH += 24;
      deltaD--;
}
if (deltaD < 0) {
      deltaD = 0;
}

console.log(`${deltaD} dia(s)`);
console.log(`${deltaH} hora(s)`);
console.log(`${deltaM} minutos(s)`);
console.log(`${deltaS} segundo(s)`);