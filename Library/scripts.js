class Book {
    constructor(title, author, category){
        this.title = title;
        this.author = author;
        this.category = category;
    }
}

let btn = document.querySelector('#submit');
let elementUl = document.querySelector('#book-list')// <ul> ADD TO INDEX, RIGHT AFTER FORM TAG

let books = [];

function addElement(book){
    
    //switch to p, to hold book information
    let elementTitle = document.createElement('p');
    let elementAuthor = document.createElement('p');
    let elementCategory = document.createElement('p');

    //hold book information
    let bookElement = document.createElement('li');

    let titleContent = document.createTextNode('Title: ' + book.title);
    let authorContent = document.createTextNode('Author: ' + book.author);
    let categoryContent = document.createTextNode('Category: ' + book.category);

    elementTitle.appendChild(titleContent);
    elementAuthor.appendChild(authorContent);
    elementCategory.appendChild(categoryContent);

    //add book information to list
    bookElement.appendChild(elementTitle);
    bookElement.appendChild(elementAuthor);
    bookElement.appendChild(elementCategory);

    //add list to list element
    elementUl.appendChild(bookElement);
}

function submitBook(e){
    e.preventDefault();

    let title = document.querySelector('title').value;
    let author = document.querySelector('author').value;
    let category = document.querySelector('category').value;

    let book = new Book(title, author, category);

    books.push();

    addElement();
}

btn.addEventListener('click', submitBook);