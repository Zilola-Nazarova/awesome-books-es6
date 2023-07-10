import { navActivate } from "./modules/nav.js";
import { updateDateTime } from "./modules/DateTime.js";
import { windowLoad } from './modules/WindowLoad.js';
import { BookList } from './modules/BookList.js';
navActivate();
updateDateTime();
window.addEventListener('load', () => {
  bookList.compileBookList();
});
const bookList = new BookList();
bookList.addBtn();

