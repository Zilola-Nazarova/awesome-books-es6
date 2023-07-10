class BookList {
  constructor() {
    this.books = JSON.parse(localStorage.getItem('books')) || []; 
  };
}

export { BookList }