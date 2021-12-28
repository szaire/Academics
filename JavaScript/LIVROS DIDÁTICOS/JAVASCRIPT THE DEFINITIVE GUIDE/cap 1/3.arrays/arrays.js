// JavaScript also supports arrays (numerically indexed lists) of values
let numbers = [2, 3, 5, 7];
console.log(numbers[0]);
console.log(numbers.length);
console.log(numbers[numbers.length-1]);   // numebers.length - 1 = 4 - 1 = 3. I guess it's usefull for claiming the last array value
numbers[4] = 1;                           // Add a new element by assignment.
numbers[4] = 9;                           // Or alter an existing element by assignment.

let empty = [];                           // [] is an empty array with no elements.
console.log(empty.length);                