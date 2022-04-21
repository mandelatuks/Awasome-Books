const listItem = document.querySelector('.list-link');
const addItem = document.querySelector('.add-link');
const contactItem = document.querySelector('.contact-link');
const formItems = document.querySelector('.new-book');
const bookList = document.querySelector('#book-list');
const contSec = document.querySelector('.contact-section');

listItem.addEventListener('click', () => {
  formItems.style.display = 'none';
  contSec.style.display = 'none';
  bookList.style.display = 'flex';
});

addItem.addEventListener('click', () => {
  formItems.style.display = 'flex';
  contSec.style.display = 'none';
  bookList.style.display = 'none';
});

contactItem.addEventListener('click', () => {
  formItems.style.display = 'none';
  contSec.style.display = 'flex';
  bookList.style.display = 'none';
});

const currentTime = new Date();
document.querySelector('.time').innerHTML = currentTime;

// Create a class
class Book {
  // Book a container
  shelf;

  // An empty array of books
  books = [];

  //  Align books added to shelf
  constructor(bookShelf) {
    this.shelf = document.querySelector(bookShelf);
  }

  //  Method that adds books to the shelf
  addBookToSHelf(bookDetailObject) {
    this.books = [...this.books, { id: this.books.length + 1, ...bookDetailObject }];
    localStorage.setItem('books', JSON.stringify(this.books));
    this.incrementBooks(this.books);
    this.addRemoveEventListener();
  }

  //  Method that increments the books in shelf(+1 whenever)
  incrementBooks(books) {
    this.shelf.innerHTML = books.map((book) => `<div class="book-block">
    
    <div class="title-author">

        <div class="title">${book.title}</div>
        <div> <p>by</p> </div>
        <div>${book.author}</div>

    </div>

    <div class="buttons">
      <button data-id="${book.id}" class="remove">Remove</button>
    </div>
</div>`).join('');
    localStorage.setItem('books', JSON.stringify(books));
  }

  addRemoveEventListener() {
    const deleteBtn = document.querySelectorAll('.remove');
    deleteBtn.forEach((el) => {
      el.addEventListener('click', (e) => {
        const id = e.target.getAttribute('data-id');
        this.removeBookFromShelf(id);
      });
    });
  }

  //  Method that removes books from the shelf
  removeBookFromShelf(id) {
    this.books = this.books.filter((b) => b.id !== Number(id));
    localStorage.setItem('books', JSON.stringify(this.books));
    this.incrementBooks(this.books);
    this.addRemoveEventListener();
  }
}

// initialize obeject for class Book
const todo = new Book('#book-list');

// Event listener for Adding books on Add button
const addBook = document.querySelector('#add-book');
addBook.addEventListener('submit', (event) => {
  event.preventDefault();
  // Get the values from the form
  const title = event.target.querySelector('#title').value;
  const author = event.target.querySelector('#author').value;
  todo.addBookToSHelf({ title, author });
  // Remove inputs from the form after adding the book
  event.target.querySelector('#title').value = '';
  event.target.querySelector('#author').value = '';
});
