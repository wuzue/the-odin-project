//IMPORTS
import '../assets/styles/index.css';
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

//CREATE ELEMENTS
let mainContainer = document.createElement('div');
mainContainer.classList.add('main-div');
document.body.appendChild(mainContainer);

let filterDiv = document.createElement('div');
filterDiv.classList.add('select');
mainContainer.appendChild(filterDiv);

let filter = document.createElement('select');
filter.classList.add('filter-todo')
filterDiv.appendChild(filter);

let optionOne = document.createElement('option');
optionOne.setAttribute('value', 'all');
optionOne.textContent = 'All';
filter.appendChild(optionOne);

let optionTwo = document.createElement('option');
optionTwo.setAttribute('value', 'completed');
optionTwo.textContent = 'Completed';
filter.appendChild(optionTwo);

let optionThree = document.createElement('option');
optionThree.setAttribute('value', 'uncompleted');
optionThree.textContent = 'Uncompleted';
filter.appendChild(optionThree);

let inputTask = document.createElement('input');
inputTask.setAttribute('type', 'text');
inputTask.placeholder = 'Task...';
inputTask.classList.add('input-task');
mainContainer.appendChild(inputTask);

let inputBtn = document.createElement('button');
inputBtn.setAttribute('type', 'submit');
inputBtn.classList.add('input-button')
inputBtn.innerHTML = `<i class='fas fa-plus'></i>`
mainContainer.appendChild(inputBtn);

let taskList = document.createElement('ul');
taskList.classList.add('task-list');
mainContainer.appendChild(taskList);

//SELECTORS
let filterOption = document.querySelector('.filter-todo');

//EVENT LISTENERS
inputBtn.addEventListener('click', addTask);
taskList.addEventListener('click', deleteTodo);
filterOption.addEventListener('click', filterTodo);

//FUNCTIONS
function addTask(){
    let todoDiv = document.createElement('div');
    let taskDataToLi = document.createElement('li');
    let checkButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    let taskData = document.querySelector('.input-task').value;
    checkButton.innerHTML = `<i class="fas fa-check"></i>`;
    deleteButton.innerHTML = `<i class="fas fa-trash"></i>`;
    

    todoDiv.classList.add('todo');
    checkButton.classList.add('check-button');
    deleteButton.classList.add('delete-button');

    taskDataToLi.innerText = taskData;

    
    todoDiv.appendChild(taskDataToLi);
    todoDiv.appendChild(checkButton);
    todoDiv.appendChild(deleteButton);
    document.querySelector('.input-task').value = '';
    taskList.appendChild(todoDiv);
}

function deleteTodo(e){
    let element = e.target;
    let i = element.parentElement;
    console.log(i);
    if(element.classList[0] === 'delete-button'){
        let todo = element.parentElement;
        todo.classList.add('fall');
        todo.addEventListener('transitioned', e => {
            todo.remove();
        })
    }
    if(element.classList[0] === 'check-button'){
        let todo = element.parentElement;
        todo.classList.toggle('completed');
        console.log(todo);
    }
}

function filterTodo(e){
    let todos = taskList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
        }
    })
}