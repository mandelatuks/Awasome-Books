const bookList = document.querySelector('.books');
const form = document.getElementById('add-book');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

let books = [];

class BookClass {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  bookCode() {
    return `<p class="title">${this.title}</p>
                 <p>${this.author}</p>
                <button data-id=${this.id} class="remove">Remove</button>
                <hr>`;
  }

  static addBook(book) {
    let id = 1;
    if (books.length > 0) {
      id = books[books.length - 1].id + 1;
    }
    book.id = id;
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static remove(id) {
    books = books.filter((b) => b.id !== Number(id));
    localStorage.setItem('books', JSON.stringify(books));
  }
}

