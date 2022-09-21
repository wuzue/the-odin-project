var addBookForm = document.querySelector('#add-book-form');
var addBookButton = document.querySelector('#add-book-button');

addBookForm.hidden = true;

addBookButton.addEventListener('click', function(){
    addBookForm.hidden = false;
    addBookButton.hidden = true;
})

// BUTTON TO DISPLAY A FORM TO ADD A NEW BOOK

class Book {
    constructor(title,author,category) {
        this.title = title;
        this.author = author;
        this.category = category;
    }
}

let btn = document.getElementById('submit');
let elementUl = document.getElementById('book-list');

let books = [];

function addElement(book) {
    
    // Convert these elements to p, in order to hold your book info.    
    let elementTitle = document.createElement('p');
    let elementAuthor = document.createElement('p');
    let elementCategory = document.createElement('p');
    
    // The list element that will hold all book info.
    let bookElement = document.createElement('li');

    let titleContent = document.createTextNode("Title: " + book.title);
    let authorContent = document.createTextNode("Author: " + book.author);
    let categoryContent = document.createTextNode("Category: " + book.category);

    elementTitle.appendChild(titleContent);
    elementAuthor.appendChild(authorContent);
    elementCategory.appendChild(categoryContent);
    
    // Add all book info to list element.
    bookElement.appendChild(elementTitle);
    bookElement.appendChild(elementAuthor);
    bookElement.appendChild(elementCategory);
    
    // Add list element to list.
    elementUl.appendChild(bookElement);
}

function submitBook(event) {
    event.preventDefault();
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let category = document.getElementById('category').value;

    let book = new Book(title,author,category);

    books.push(book);     

    addElement(book);

    addBookButton.hidden = false;

    addBookForm.hidden = true;
      
}

/*btn.addEventListener('click', function(){
    submitBook();
    addBookForm.hidden = true;
});*/

btn.addEventListener('click', submitBook);