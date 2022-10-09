//VARIABLES EXPORT
export let mainDiv

//MAIN DIV CONTAINER
export function mainContainer(){
    let createMainDiv = document.createElement('div');
    createMainDiv.id = 'main-container';
    document.body.appendChild(createMainDiv);
    mainDiv = document.querySelector('#main-container');
}