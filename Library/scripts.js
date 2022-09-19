var down = document.getElementById("GFG_DOWN");
var clickHereButton = document.querySelector('#click-here-button');
           
// Create a break line element
var br = document.createElement("br");

function GFG_Fun() {              
    // Create a form dynamically
    var form = document.createElement("form");
    // form.setAttribute("method", "post");
    // form.setAttribute("action", "url here");
 
    // Create an input element for the title
    var title = document.createElement("input");
    title.setAttribute("type", "text");
    title.setAttribute("name", "title");
    title.setAttribute("placeholder", "Title");
 
    // Create an input element for the author
    var author = document.createElement("input");
    author.setAttribute("type", "text");
    author.setAttribute("name", "author");
    author.setAttribute("placeholder", "Author");
 
    // Create an input element for the pages
    var pages = document.createElement("input");
    pages.setAttribute("type", "text");
    pages.setAttribute("name", "pages");
    pages.setAttribute("placeholder", "Pages");
 
    // create a add book button
    var addBook = document.createElement("input");
    addBook.setAttribute("type", "submit");
    addBook.setAttribute("value", "Add Book");

    //create a ´have you read it´ check
    var readIt = document.createElement('input');
    readIt.setAttribute('type', 'checkbox');
    readIt.setAttribute('value', 'readit')

    //create a label for the checkbox
    var readItLabel = document.createElement('label');
    readItLabel.innerHTML = 'Have You Read It?  ';

    // Append the title input to the form
    form.appendChild(title);
                 
    // Inserting a line break
    form.appendChild(br.cloneNode());
                 
    // Append the author to the form
    form.appendChild(author);
    form.appendChild(br.cloneNode());
                 
    // Append the pages to the form
    form.appendChild(pages);
    form.appendChild(br.cloneNode());

    // Append the checkbox label to form
    form.appendChild(readItLabel);
    //form.appendChild(br.cloneNode());

    // Append the ´have you read it´ to the form
    form.appendChild(readIt);
    form.appendChild(br.cloneNode());
                 
    // Append the submit button to the form
    form.appendChild(addBook);
 
    document.getElementsByTagName("body")[0].appendChild(form);

    clickHereButton.hidden = true;
    
}