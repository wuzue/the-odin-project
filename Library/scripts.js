var addBookForm = document.querySelector('#add-book-form');
var addBookButton = document.querySelector('#add-book');
var formDiv = document.querySelector("#form-div");

var testDel = document.querySelector('#test-del');
testDel.hidden = true;

//document.getElementById('add-book-form').style.position = 'relative';

formDiv.hidden = true;
// BUTTON TO DISPLAY A FORM TO ADD A NEW BOOK
addBookButton.addEventListener('click', function(){
    formDiv.hidden = false;
    addBookButton.hidden = true;
})


class Book {
    constructor(title,author,pages,category, delBook) {
        this.title = title;
        this.author = author;
        this.pages = pages
        this.category = category;
        this.delBook = delBook;
    }
}

let btn = document.getElementById('submit');
let elementUl = document.getElementById('book-list');

let books = [];

//CRIANDO FEATURE PARA DELETAR LIVRO EM ESCOPO GLOBAL
//!!! DELETE TA AQUI !!!

function addElement(book) {
    
    // Convert these elements to p, in order to hold your book info.    
    let elementTitle = document.createElement('p');
    let elementAuthor = document.createElement('p');
    let elementPages = document.createElement('p');
    let elementCategory = document.createElement('p');
    let elementDelBook = document.createElement('p');
    
    
    // The list element that will hold all book info.
    let bookElement = document.createElement('li');
    bookElement.setAttribute('class', 'li-books')

    let titleContent = document.createTextNode("Title: " + book.title);
    let authorContent = document.createTextNode("Author: " + book.author);
    let pagesContent = document.createTextNode("Pages: " + book.pages);
    let categoryContent = document.createTextNode("Genre: " + book.category);
    //let delBookContent = document.createTextNode('\u{1f5d1}');
    let delBookContent = document.createTextNode("delete book");   
    
    elementDelBook.setAttribute('id', 'delete-icon');
    
    elementTitle.appendChild(titleContent);
    elementAuthor.appendChild(authorContent);
    elementPages.appendChild(pagesContent);
    elementCategory.appendChild(categoryContent);
    elementDelBook.appendChild(delBookContent);   
    
    // Add all book info to list element.
    bookElement.appendChild(elementTitle);
    bookElement.appendChild(elementAuthor);
    bookElement.appendChild(elementPages);
    bookElement.appendChild(elementCategory);
    bookElement.appendChild(elementDelBook);
    
    
    

    // Add list element to list.
    elementUl.appendChild(bookElement);


    console.log(bookElement);
    
    //CODIGO ABAIXO TÁ O AÇO!!! TA FUNCIONANDO PRA REMOVER O LIVRO CLICADO
    const getLi = document.getElementById('delete-icon');
    elementDelBook.addEventListener('click', function(dBook){
        //console.log('clicked');//debugging purpose, see if the click is ok :p
        bookElement.remove();
    }) 

    //DESSE JEITO FUNCIONA, CONSIGO REMOVER OS LIVROS QUE CLICAR
    //MAS A AREA DE CLIQUE TA PEGANDO TODO O ELEMENTO 'LI'
    /*const getLi = document.getElementById('delete-icon');
    bookElement.addEventListener('click', function(dBook){
        dBook.target.remove();
    })*/ 
    
}
function submitBook(event) {
    event.preventDefault();

    //GET INPUT NAMES TO CLEAN VALUE AFTER INPUT
    let titleInput = document.querySelector('#title');
    let authorInput = document.querySelector('#author');
    let pagesInput = document.querySelector('#pages');
    
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let category = document.getElementById('category').value;

    let book = new Book(title,author,pages,category);

    books.push(book);     

    addElement(book);

    formDiv.hidden = true;

    addBookButton.hidden = false;

    //CLEAR INPUT FIELDS AFTER INPUT
    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";

}

btn.addEventListener('click', submitBook);