import { navActivate } from './modules/nav.js';
import { updateDateTime } from './modules/DateTime.js';
import { BookList } from './modules/BookList.js';
import { takeFromLocal } from './modules/InputPreserve.js';

navActivate();
updateDateTime();

const bookList = new BookList();
bookList.addBtn();

window.addEventListener('load', () => {
  bookList.compileBookList();
  takeFromLocal();
});