// CLASSES:

class Book {
      constructor(title, author, pages) {
            this.title = title;
            this.author = author;
            this.pages = pages;
      }
}

let myBook = new Book("The Awesome Story", "Bartolomeu Chagas", 250);
let mySecondBook = new Book("The Lake of Chocolate", "Romeu Dantas", 450);

console.log(myBook);
console.log(mySecondBook);