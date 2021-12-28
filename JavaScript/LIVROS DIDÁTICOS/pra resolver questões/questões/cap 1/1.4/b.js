let num1 = prompt('Digite dois números');
let num2 = prompt('Digite dois números');
let division;
if (num2 != 0) {
      division = num1 / num2;
      document.write(`${num1} / ${num2} = ${division}`);
}
else {
      document.write(`O denominador não pode ser 0!`);
}