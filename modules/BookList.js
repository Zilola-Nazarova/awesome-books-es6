import { setToLocal } from './InputPreserve.js';

class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.errorElements = {
      author: document.getElementById('author-error'),
      title: document.getElementById('title-error'),
    };
  }

  addBtn() {
    const addButton = document.querySelector('form button');
    addButton.addEventListener('click', (event) => {
      event.preventDefault();
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      if (title && author !== '') {
        const book = { title, author };
        this.addBook(book);
        this.compileBookList();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        setToLocal();
      } else if (title === '') {
        this.showError('title', 'Please enter the book title.');
      } else if (author === '') {
        this.showError('author', 'Please enter the book author.');
      }
    });
  }

  addBook(book) {
    this.books.unshift(book);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  showError(type, message) {
    const errorElement = this.errorElements[type];
    errorElement.textContent = message;
  }

  compileBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    this.books.forEach((book, index) => {
      const li = document.createElement('li');
      const para = document.createElement('p');
      para.textContent = `"${book.title}" by ${book.author}`;
      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', () => {
        this.removeBook(index);
        this.compileBookList();
      });
      const hr = document.createElement('hr');
      li.appendChild(para);
      li.appendChild(removeBtn);
      bookList.appendChild(li);
      bookList.appendChild(hr);
    });
  }
}

export default BookList;