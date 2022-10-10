// IMPORTS
import { mainDiv } from "./mainDiv";
import '../assets/styles/projectsStyle.css';
//import { NormalModuleReplacementPlugin } from "webpack";

export function projectsSection(){
    //CREATE MAIN PROJECT DIV
    let projectDiv = document.createElement('div');
    projectDiv.id = 'project-div';
    mainDiv.appendChild(projectDiv);

    // PROJECT TITLE
    let projectTitle = document.createElement('p');
    projectTitle.id = 'project-title';
    projectTitle.textContent = 'Projects';
    projectDiv.appendChild(projectTitle);

    //NEW PROJECT BUTTON
    let newProject = document.createElement('p');
    newProject.id = 'new-project';
    newProject.textContent = 'New Project';
    projectDiv.appendChild(newProject);

    // FORM TO CREATE A NEW PROJECT
    let addBookForm = document.createElement('form');
    addBookForm.id = 'add-book-form';
    projectDiv.appendChild(addBookForm);

    let formDiv = document.createElement('div');
    formDiv.id = 'form-div';
    addBookForm.appendChild(formDiv)

    let labelProject = document.createElement('label');
    labelProject.id = 'label-title';
    labelProject.textContent = 'Project name:'
    formDiv.appendChild(labelProject);

    let projectName = document.createElement('input');
    projectName.id = 'name-input';
    projectName.setAttribute('type', 'text');
    projectName.required = true;
    projectName.setAttribute('placeholder', 'funny project')
    formDiv.appendChild(projectName);

    /*
    let labelAuthor = document.createElement('label');
    labelAuthor.id = 'label-title2';
    labelAuthor.textContent = 'Admin:'
    formDiv.appendChild(labelAuthor);

    let authorName = document.createElement('input');
    authorName.required = true;
    authorName.id = 'name-input2';
    authorName.setAttribute('type', 'text');
    authorName.setAttribute('placeholder', 'renan..')
    formDiv.appendChild(authorName);

    let labelPriority = document.createElement('label');
    labelPriority.id = 'label-title2';
    labelPriority.textContent = 'Priority:'
    formDiv.appendChild(labelPriority);

    let priority = document.createElement('select');
    priority.setAttribute('id', 'priority');
    formDiv.appendChild(priority);

    let priorityOne = document.createElement('option');
    priorityOne.textContent = 'Low'
    priority.appendChild(priorityOne);

    let priorityTwo = document.createElement('option');
    priorityTwo.textContent = 'Medium'
    priority.appendChild(priorityTwo);

    let priorityThree = document.createElement('option');
    priorityThree.textContent = 'High'
    priority.appendChild(priorityThree);
    */

    let submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.id = 'submit-project';
    submitButton.textContent = 'submit';
    formDiv.appendChild(submitButton);

    // FORM DIV IS HIDDEN BY DEFAULT, OPENS WHEN 'NEW PROJECT IS CLICKED'
    addBookForm.hidden = true;

    //WHEN CLICK ON NEW PROJECT, IT CREATES A NEW PROJECT :p > p fazer
    let newProjectBtn = document.querySelector('#new-project');
    newProjectBtn.addEventListener('click', () => {
        addBookForm.hidden = false;
        newProject.hidden = true;
    });

    let projectList = document.createElement('ul');
    projectList.id = 'project-list';
    projectDiv.appendChild(projectList);

    class Project {
        constructor(pName){
            this.pName = pName;
        }
    }

    let btn = document.querySelector('#submit-project');
    let elementUl = document.querySelector('#project-list');

    let projects = [];

    // DEFAULT PROJECT
    let defaultProject = document.createElement('li');
    defaultProject.id = 'default-project';
    defaultProject.textContent = 'Default'
    projectList.appendChild(defaultProject);

    function addElement(book){

        //convert elements to p, to save project info
        let elementName = document.createElement('p');

        //li element to hold project info
        let projectElement = document.createElement('li');
        projectElement.setAttribute('class', 'li-projects');

        let nameContent = document.createTextNode(book.pName);

        elementName.appendChild(nameContent);

        projectElement.appendChild(elementName);

        //add li element to list
        elementUl.appendChild(projectElement);
    }

    function submitProject(event){
        event.preventDefault();

        let nameInput = document.querySelector('#name-input');

        let pName = document.querySelector('#name-input').value;

        let project = new Project(pName);
        projects.push(project);
        addElement(project);

        nameInput.value = '';

        addBookForm.hidden = true;
        newProjectBtn.hidden = false;
    }
    btn.addEventListener('click', submitProject);
}