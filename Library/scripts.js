var down = document.getElementById("GFG_DOWN");
var clickHereButton = document.querySelector('#click-here-button');
           
// Create a break line element
var br = document.createElement("br");

function GFG_Fun() {              
    // Create a form dynamically
    var form = document.createElement("form");
    form.setAttribute("method", "post");
    form.setAttribute("action", "https://google.com");
 
    // Create an input element for the title
    var FN = document.createElement("input");
    FN.setAttribute("type", "text");
    FN.setAttribute("name", "title");
    FN.setAttribute("placeholder", "Title");
 
    // Create an input element for the author
    var DOB = document.createElement("input");
    DOB.setAttribute("type", "text");
    DOB.setAttribute("name", "author");
    DOB.setAttribute("placeholder", "Author");
 
    // Create an input element for the pages
    var EID = document.createElement("input");
    EID.setAttribute("type", "text");
    EID.setAttribute("name", "pages");
    EID.setAttribute("placeholder", "Pages");
 
    // create a submit button
    var s = document.createElement("input");
    s.setAttribute("type", "submit");
    s.setAttribute("value", "Submit");

    //create a ´have you read it´ check
    var readIt = document.createElement('input');
    readIt.setAttribute('type', 'checkbox');
    readIt.setAttribute('value', 'Have You Read It?')

    // Append the full name input to the form
    form.appendChild(FN);
                 
    // Inserting a line break
    form.appendChild(br.cloneNode());
                 
    // Append the DOB to the form
    form.appendChild(DOB);
    form.appendChild(br.cloneNode());
                 
    // Append the emailID to the form
    form.appendChild(EID);
    form.appendChild(br.cloneNode());

    // Append the ´have you read it´ to the form
    form.appendChild(readIt);
    form.appendChild(br.cloneNode());
                 
    // Append the submit button to the form
    form.appendChild(s);
 
    document.getElementsByTagName("body")[0].appendChild(form);

    clickHereButton.hidden = true;
    
}

if(s) {
    s.hidden = true;
}