let s = parseInt(prompt());
let h = parseInt(s / 3600);
s -= h*3600;
let m = parseInt(s / 60);
s -= m*60;
console.log(`${h}:${m}:${s}`)