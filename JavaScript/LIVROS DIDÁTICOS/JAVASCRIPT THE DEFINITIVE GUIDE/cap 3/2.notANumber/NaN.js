console.log(Infinity);                    // A read/write variable initialized to Infinity.
console.log(Number.POSITIVE_INFINITY)     // Same value, read-only.
console.log(1/0);                         // This is also the same value.
console.log(Number.MAX_VALUE * 2)         // This also evaluates to Infinity.

console.log(Number.NEGATIVE_INFINITY)     // These expressions are negative infinity.
console.log(-Infinity)
console.log(-1/0)
console.log(-Number.MAX_VALUE * 2)

console.log(NaN)                          // A read/write variable initialized to NaN.
console.log(Number.NaN)                   // A read-only property holding the same value.
console.log(0/0)                          // Evaluates to NaN.

console.log(Number.MIN_VALUE/2)           // Underflow: evaluates to 0
console.log(-Number.MIN_VALUE/2)          // Negative zero
console.log(-1/Infinity)                  // Also negative 0
console.log(-0)

// observations:
let x = 10;
let x1 = NaN
// can't write the following !!!
console.log(x == NaN);

// you should write:
console.log(x != x);
// or
console.log(isNaN(x))
console.log(isNaN(x1))

isFinite() // is the opposit of isNaN(), returns true if it's a number and false if it's NaN

// OBS: 0 and -0 are almost indistinguishable in JavaScript
// The only exception occurs when using in division:
var zero = 0;
var negz = -0;
console.log('zero = 0');                                    // Regular zero
console.log('negz = -0');                                   // Negative zero
console.log('zero === negz: ' + (zero === negz))            // => true: zero and negative zero are equal
console.log('1/zero === 1/negz: ' + (1/zero === 1/negz))    // => false: infinity and -infinity are not equal