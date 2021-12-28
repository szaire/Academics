let p1 = prompt();
let p2 = prompt();
let P1 = p1.split(" ");
let P2 = p2.split(" ");
let Distance = parseFloat(Math.sqrt(Math.pow((P1[1] - P1[0]), 2) + Math.pow((P2[1] - P2[0]), 2)));
console.log(Distance.toFixed(4));