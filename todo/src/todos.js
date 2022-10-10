// IMPORTS
import '../assets/styles/todos.css';
import { mainDiv } from './mainDiv';

export function toDos(){
    //todo main div
    let todoDiv = document.createElement('div');
    todoDiv.id = 'todo-div';
    mainDiv.appendChild(todoDiv);

    //todo title
    let todoTitle = document.createElement('p');
    todoTitle.id = 'todo-title';
    todoTitle.textContent = 'To Do';
    todoDiv.appendChild(todoTitle);

    //todo list
    let todoList = document.createElement('ul');
    todoList.id = 'todo-list';
    todoDiv.appendChild(todoList);

    //list items
    let listItem = document.createElement('li');
    listItem.id = 'list-item';
    listItem.textContent = 'Teste1';
    todoList.appendChild(listItem);

    let listItem2 = document.createElement('li');
    listItem2.id = 'list-item';
    listItem2.textContent = 'Teste2';
    todoList.appendChild(listItem2);

    let listItem3 = document.createElement('li');
    listItem3.id = 'list-item';
    listItem3.textContent = 'Teste3';
    todoList.appendChild(listItem3);
}
