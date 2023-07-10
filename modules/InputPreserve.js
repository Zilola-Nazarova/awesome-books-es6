const inputTitle = document.getElementById('title');
const inputAuthor = document.getElementById('author');
const currentInput = {};

export const setToLocal = () => {
  currentInput.currentTitle = document.getElementById('title').value;
  currentInput.currentAuthor = document.getElementById('author').value;
  localStorage.setItem('currentInput', JSON.stringify(currentInput));
}

export const takeFromLocal = () => {
  console.log()
  document.getElementById('title').value = JSON.parse(localStorage.getItem('currentInput')).currentTitle;
  document.getElementById('author').value = JSON.parse(localStorage.getItem('currentInput')).currentAuthor;
};

inputTitle.onkeyup = setToLocal;
inputAuthor.onkeyup = setToLocal;
