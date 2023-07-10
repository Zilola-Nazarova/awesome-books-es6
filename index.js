import { init } from "./modules/nav.js";
import { updateDateTime } from "./modules/DateTime.js";
import { addBtn } from './modules/AddBtn.js'
import { BookList } from './modules/BookList.js'
init();
updateDateTime();
addBtn();
const bookList = new BookList();
console.log(bookList);
