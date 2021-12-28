prompt = () => {return lines.shift()}

let d1 = parseInt(prompt(`Dia `));
let horario1 = prompt().split(` `).map(x => parseInt(x));
let [h1, m1, s1] = horario1;

let d2 = parseInt(prompt(`Dia `));
let horario2 = prompt().split(` `).map(x => parseInt(x));
let [h2, m2, s2] = horario2;

let q1 = s1 + m1 * 60 + h1 * 3600 + d1 * 3600 * 24;
let q2 = s2 + m2 * 60 + h2 * 3600 + d2 * 3600 * 24;
let duracao = q2 - q1;

console.log(`${duracao / (3600 * 24)} dia(s)`); 
duracao = duracao % (3600 * 24);
console.log(`${duracao / (3600)} hora(s)`);
duracao = duracao % (3600);
console.log(`${duracao / (60)} minuto(s)`);
duracao = duracao % (60);
console.log(`${duracao} segundo(s)`);