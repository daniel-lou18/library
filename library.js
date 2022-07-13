class Book {
  constructor(title, author, pages, read) {
    this._title = title;
    this._author = author;
    this._pages = pages;
    this._read = read;
  }

  get title() {
    return this._title
  }

  set title(newTitle) {
    this._title = newTitle
  }

  get author() {
    return this._author
  }

  set author(newAuthor) {
    this._author = newAuthor
  }

  get pages() {
    return this._pages
  }

  set pages(newPages) {
    this._pages = newPages
  }

  get read() {
    return this._read
  }

  set read(newRead) {
    this._read = newRead
  }

  readText() {
    if (!this._read) {
      return 'read'
    } else {
      return 'not read yet'
    }
  }
  
  info() {
      return `${this._title} by ${this._author}, ${this._pages} pages, ${this.readText()}`;
  }
};

const Library = (function() {
  let myLibrary = [];
  const getMyLibrary = () => myLibrary;

  function addBookToLibrary(book) {
    myLibrary.push(book);
  }
  
  function displayLibrary() {
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    myLibrary.forEach(function(book, index) {
      const row = document.createElement('tr');
      const title = document.createElement('td');
      const author = document.createElement('td');
      const pages = document.createElement('td');
      const read = document.createElement('td');
      const buttonsCell = document.createElement('td');
      const removeBook = document.createElement('button');
      const toggleRead = document.createElement('button');
  
      title.textContent = book.title;
      author.textContent = book.author;
      pages.textContent = book.pages;
      read.textContent = book.read;
      removeBook.textContent = '🗑';
      toggleRead.textContent = '🕮';
  
      row.setAttribute('id', `row-${index}`);
      row.setAttribute('data-row-num', `${index}`)
      title.setAttribute('id', `title-${index}`);
      author.setAttribute('id', `author-${index}`);
      pages.setAttribute('id', `pages-${index}`);
      read.setAttribute('id', `read-${index}`);
      buttonsCell.setAttribute('id', `buttons-${index}`);
      removeBook.setAttribute('data-row-num', `${index}`);
      toggleRead.setAttribute('data-row-num', `${index}`);
  
      removeBook.addEventListener('click', deleteBook);
      toggleRead.addEventListener('click', toggleStatus);
  
      tbody.appendChild(row);
      const tr = document.querySelector(`#row-${index}`);
      tr.appendChild(title);
      tr.appendChild(author);
      tr.appendChild(pages);
      tr.appendChild(read);
      tr.appendChild(buttonsCell)
      buttonsCell.appendChild(removeBook);
      buttonsCell.appendChild(toggleRead);
    })
  }
  
  function deleteBook(e) {
    myLibrary.splice(`${e.target.dataset.rowNum}`, 1);
    displayLibrary();
  };
  
  function toggleStatus(e) {
    myLibrary[`${e.target.dataset.rowNum}`].read = !myLibrary[`${e.target.dataset.rowNum}`].read;
    displayLibrary();
  }
  return {getMyLibrary, addBookToLibrary, displayLibrary}
})();

const siddhartha = new Book('Siddhartha', 'Hermann Hesse', 300, true);
const aneantir = new Book('Anéantir', 'Michel Houellebecq', 500, false);
const gallico = new Book('De bello gallico', 'Julius Caesar', 150, true);
Library.addBookToLibrary(siddhartha);
Library.addBookToLibrary(aneantir);
Library.addBookToLibrary(gallico);
Library.displayLibrary();

const Form = (function() {
  const showForm = document.querySelector('.add-book');
  showForm.addEventListener('click', function(e) {
    form.style.display = 'block';
  });

  const form = document.querySelector('#form-add-book');
  form.addEventListener('submit', addBook);
  function addBook(e) {
    const title = document.querySelector('input[name="title"]');
    const author = document.querySelector('input[name="author"]');
    const pages = document.querySelector('input[name="pages"]');
    const read = document.querySelector('input[name="read"]:checked');
    const book = new Book(title.value, author.value, pages.value, Boolean(read.value));
    Library.addBookToLibrary(book);
    console.log(Library.getMyLibrary());
    Library.displayLibrary();
    e.preventDefault();
  };
})();