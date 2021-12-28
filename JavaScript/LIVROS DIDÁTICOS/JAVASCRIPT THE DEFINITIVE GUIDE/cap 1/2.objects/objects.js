// An object is a collection of name/value pairs, or a string to value map.
let book = {
      topic: 'Javascript',
      fat: true,
};

console.log(book.topic);      // => "JavaScript"
console.log(book["fat"]);   // => true: another way to access property values.

book.author = 'Carl Sagan';   // Create new properties by assignment.
book.pages = 200;
console.log(book["author"]);   // => true: another way to access property values.

book.contents = {}            // {} is an empty object with no properties.