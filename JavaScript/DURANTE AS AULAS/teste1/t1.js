let tempo = prompt('Digite as horas e os minutos:');
let parts = tempo.split(' '); // O split é utilizado apenas em strings!!!
let hora = parseInt(parts[0]); // converter a string para numero (parseInt ou Float)
let minuto = parseInt(parts[1]);
let dHora = parseFloat(hora + minuto/60);
let dMinuto = parseInt(minuto + hora*60);
let dSegundo = hora*3600 + minuto*60;
document.write(`Seu tempo em horas é: ${dHora}h<br>`);
document.write(`Seu tempo em minutos é: ${dMinuto}min<br>`);
document.write(`Seu tempo em segundos é: ${dSegundo}s`);