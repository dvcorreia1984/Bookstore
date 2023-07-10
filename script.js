const books = [
  {
    Id: 1,
    Title: 'Lorem ipsum',
    Author: 'Testeroo Testyy',
  },
  {
    Id: 2,
    Title: 'Second Books',
    Author: 'Testeroo Testyy',
  },
];


// Display books
function displayBooks() {
  let book = '';
  for (let i = 0; i < books.length; i += 1) {
    book += `<p>${books[i].Title}</p>`;
    book += `<p>${books[i].Author}</p>`;
    book += `<button onclick="removeBook(${books[i].Id})">Remove</button><br>`;
    book += '<hr>';
  }
  document.getElementById('display').innerHTML = book;
}
displayBooks();

// Add books
function addBook() {
  const title = document.getElementById('Title').value;
  const author = document.getElementById('Author').value;
  if (title && author) {
    const bookId = books.length + 1;
    books.push({ Id: bookId, Title: title, Author: author });
    displayBooks();
    document.querySelector('form').reset();
    localStorage.setItem('myBooklist', JSON.stringify(books));
  }
}
addBook();

