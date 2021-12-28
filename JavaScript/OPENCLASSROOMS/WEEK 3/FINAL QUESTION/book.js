class Book {
      constructor(title, author, description, pages, currentPage, read) {
            this.title = title;
            this.author = author;
            this.description = description;
            this.pages = pages;
            this.currentPage = currentPage;
            this.read = read;
      }
      readBook(page) {
            if (page < 1) {
                  return 0;
            }
            else if (page >= 1) {
                  this.currentPage = page;
                  return 1;
            }
            else if (page == this.pages) {
                  this.currentPage = page;
                  this.read = true;
                  return 1;
            }
      }
}

let book1 = new Book('Book1', 'Author1', 'Description1', 400, 50, false);
let book2 = new Book('Book2', 'Author2', 'Description2', 200, 80, false);
let book3 = new Book('Book3', 'Author3', 'Description3', 150, 150, true);

const books = [book1, book2, book3];