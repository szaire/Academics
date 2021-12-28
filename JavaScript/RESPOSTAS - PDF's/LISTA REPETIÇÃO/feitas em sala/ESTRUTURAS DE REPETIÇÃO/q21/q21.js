let n = parseInt(prompt("digite n"));
let somaImpar = 0;
let somaPar = 0;
let cntC = 0;
let somaD = 0;
let cntD = 0;
 
for (let i = 1; i <= n; i++) {
	let num = parseInt(prompt("digite num"));
 
	if (num%2 != 0)	{	//item a
		somaImpar = somaImpar + num;
	} else {	//item b
		somaPar = somaPar + num;
	}
 
	//item c
	if (num >= 10 && num <= 20) {
		cntC++;
	}
 
	//item d
	if (num > 30) {
		somaD = somaD + num;
		cntD++;
	}
}
 
document.write(somaImpar + "<br>");
document.write(somaPar + "<br>");
document.write(cntC + "<br>");
document.write(somaD/cntD);