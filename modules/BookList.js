class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || []; 
  };
  
  addBtn() {
    const addButton = document.querySelector('form button');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author !== '') {
        const book = { title, author };
        console.log("I'm adding a book", book);
        this.addBook(book);
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
      } 
    });
  };

  addBook(book) {
    this.books.push(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }
}

export { BookList };