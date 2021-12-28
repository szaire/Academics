let salary = parseFloat(prompt('Digite o salário'));
let newSalary;
if (salary <= 500) {
      newSalary = salary + (salary * 0.2);
}
else {
      newSalary = salary + (salary * 0.1);
}
document.write(`O aumento será de ${newSalary}`);