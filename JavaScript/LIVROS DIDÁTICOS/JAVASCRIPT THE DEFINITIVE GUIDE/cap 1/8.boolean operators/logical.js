// Logical operators combine or invert boolean values
let x = 2;
let y = 3;
console.log((x == 2) && (y == 3));    // => true: both comparisons are true. && is AND
console.log((x > 3) || (y < 3));      // => false: neither comparison is true. || is OR
console.log(!(x == y));               // => true: ! inverts a boolean value