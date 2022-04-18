const booksElement = document.querySelector('.book-list');
const books = [
  {
    title: 'life and living',
    author: 'john doe',
  },
];


const displayBooks = () => {
  booksElement.innerHTML = '';
  for (const bookId in books) {
    if (Object.hasOwnProperty.call(books,bookId)){


    booksElement.innerHTML += `
    <article class="book" >
   <span>${data.title}</span>
   <br>
   <span>${data.author}</span>
   <br>
   <button type="button" id="delete">Remove</button>
   <hr>
   </article> `;
  
});
    }
  }

}
