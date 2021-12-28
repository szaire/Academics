// Equality and relational operators test whether two values are equal,
// unequal, less than, greater than, and so on. They evaluate to true or false.
var x = 2; 
var y = 3;        // These = signs are assignment, not equality tests
console.log(x == y);            // => false: equality
console.log(x != y)            // => true: inequality
console.log(x < y)             // => true: less-than
console.log(x <= y)            // => true: less-than or equal
console.log(x > y)             // => false: greater-than
console.log(x >= y)            // => false: greater-than or equal
console.log("two" == "three")  // => false: the two strings are different
console.log("two" > "three")   // => true: "tw" is alphabetically greater than "th"
console.log(false == (x > y))  // => true: false is equal to false