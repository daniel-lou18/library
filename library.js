let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    if (read) {
      return `${this.title} by ${this.author}, ${this.pages} pages, read`;
    } else {
      return `${this.title} by ${this.author}, ${this.pages} pages, not read yet`;
    }
  }
};

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

    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages;
    read.textContent = book.read;

    row.setAttribute('id', `row-${index}`);
    title.setAttribute('id', `title-${index}`);
    author.setAttribute('id', `author-${index}`);
    pages.setAttribute('id', `pages-${index}`);
    read.setAttribute('id', `read-${index}`);

    tbody.appendChild(row);
    const tr = document.querySelector(`#row-${index}`);
    tr.appendChild(title);
    tr.appendChild(author);
    tr.appendChild(pages);
    tr.appendChild(read);    
  })
}

const siddhartha = new Book('Siddhartha', 'Hermann Hesse', 300, true);
const aneantir = new Book('Anéantir', 'Michel Houellebecq', 500, false);
addBookToLibrary(siddhartha);
addBookToLibrary(aneantir);
displayLibrary();

// const newBook = document.querySelector('.add-book');
// newBook.addEventListener('click', function(e) {

// });

const form = document.querySelector('#form-add-book');
form.addEventListener('submit', addBook);
function addBook(e) {
  const title = document.querySelector('input[name="title"]');
  const author = document.querySelector('input[name="author"]');
  const pages = document.querySelector('input[name="pages"]');
  const read = document.querySelector('input[name="read"]:checked');
  const book = new Book(title.value, author.value, pages.value, read.value);
  addBookToLibrary(book);
  console.log(myLibrary);
  displayLibrary();
  e.preventDefault();
}

