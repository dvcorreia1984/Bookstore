// Create Books class to manage the book list

class Books {
  createObject() {
    this.books = [
      {
        Id: 1,
        title: 'Lorem ipsum',
        author: 'Testeroo Testyy',
      },
      {
        Id: 2,
        title: 'Second Books',
        author: 'Testeroo Testyy',
      },
    ];
    if (localStorage.getItem('books') != null) {
      this.books = JSON.parse(localStorage.getItem('books'));
    }
  }

  // Display the book list
  displayBooks() {
    const x = this.books;
    let book = '';
    let displayType = 1;
    for (let i = 0; i < x.length; i += 1) {
      document.getElementById('display').innerHTML = `
      <div class="display" id="display"></div>`;
      book += `<div id='books-container${displayType}'>`;
      book += `<div id='book-author'><p id="booktext">"${x[i].title}" by ${x[i].author}</p></div>`;
      book += `<button onclick="a. removeBooks(${x[i].Id});">Remove</button></div>`;
      if (displayType === 1) {
        displayType = 2;
      } else {
        displayType = 1;
      }
    }
    document.getElementById('display').innerHTML = book;
  }

  // Add books
  addBooks() {
    const x = this.books;
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    if (title !== '' && author !== '') {
      const bookId = x.length + 1;
      x.push({ Id: bookId, title, author });
      this.displayBooks();
      document.querySelector('form').reset();
      this.saveToLocalStorage();
    //   alert(bookId);
    }
  }

  // Remove books from the list
  removeBooks(removeId) {
    const book = this.books;
    const filter = book.filter((remBook, i) => {
      if (removeId === remBook.Id) {
        book.splice(i, 1);
        this.displayBooks();
        this.saveToLocalStorage();
      }
      return true;
    });
    return filter;
  }

  // Save to local storage
  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  // Add local time to date id

  // eslint-disable-next-line class-methods-use-this
  addDate() {
    const date = new Date();
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true,
    };
    const dateId = date.toLocaleString('en-US', options);
    document.getElementById('date').innerHTML = dateId;
  }

  // eslint-disable-next-line class-methods-use-this
  lists() {
    document.getElementById('add-new').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('lists').style.display = 'flex';
    document.getElementById('container').style.display = 'flex';
  }

  // eslint-disable-next-line class-methods-use-this
  addNewBook() {
    document.getElementById('lists').style.display = 'none';
    document.getElementById('contactus').style.display = 'none';
    document.getElementById('add-new').style.display = 'flex';
    document.getElementById('container').style.display = 'flex';
  }

  // eslint-disable-next-line class-methods-use-this
  contactus() {
    document.getElementById('lists').style.display = 'none';
    document.getElementById('contactus').style.display = 'flex';
    document.getElementById('add-new').style.display = 'none';
    document.getElementById('container').style.display = 'none';
  }
}

// Create object of Books class
const a = new Books();
a.createObject();
a.displayBooks();
a.saveToLocalStorage();
a.addDate();
