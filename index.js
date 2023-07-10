import { navActivate } from "./modules/nav.js";
import { updateDateTime } from "./modules/DateTime.js";
import { BookList } from './modules/BookList.js';
import { setToLocal, takeFromLocal } from './modules/InputPreserve.js'
navActivate();
updateDateTime();
window.addEventListener('load', () => {
  bookList.compileBookList();
  takeFromLocal();
});
const bookList = new BookList();
bookList.addBtn();

