const addBtn = () => {
  const addButton = document.querySelector('form button');
  addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title && author !== '') {
      const book = { title, author };
      console.log("I'm adding a book", book);

      document.getElementById('title').value = '';
      document.getElementById('author').value = '';
    } 
  });
};

export { addBtn };