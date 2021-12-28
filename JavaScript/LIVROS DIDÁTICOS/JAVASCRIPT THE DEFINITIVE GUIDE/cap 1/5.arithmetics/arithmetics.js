// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are the most common:
console.log(3 + 2);     //addition
console.log(3 - 2);     // subtraction
console.log(3 * 2);     //multiplication
console.log(3 / 2);     //division

let points = [
      {x:1, y:2},
      {x:4, y:10}
]
console.log(points[0].x + points[1].y); //more complicated operands work, too

console.log('3' + '2'); // this is called concatenation