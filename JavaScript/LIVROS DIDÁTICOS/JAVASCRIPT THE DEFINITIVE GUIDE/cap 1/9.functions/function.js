// Functions are parameterized blocks of JavaScript code that we can invoke.
let x = 2;

function plus1(num){ // i define a function named plus1
      return num + 1; // i 'returns' me the value of num (parameter) and assign it on whatever variable i put between the parenthesys 
}

function square(num){
      return num*num;
}

console.log(plus1(x)); // it wil show me 3 in the console
console.log(square(x)); // it wil show me 4 in the console
console.log(square(plus1(x))) // invoking two functions, one inside the other. it will show 9 on the console