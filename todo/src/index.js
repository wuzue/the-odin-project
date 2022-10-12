//IMPORTS
import '../assets/styles/index.css';

//SELECTORS

//FUNCTIONS | DOM
let mainContainer = document.createElement('div');
mainContainer.setAttribute('id', 'main-container');
document.body.appendChild(mainContainer);

let inputTask = document.createElement('input');
inputTask.setAttribute('type', 'text');
inputTask.setAttribute('id', 'input-task');
mainContainer.appendChild(inputTask);

let inputBtn = document.createElement('button');
inputBtn.setAttribute('type', 'submit');
inputBtn.setAttribute('id', 'input-btn');
inputBtn.innerText = 'Add'
mainContainer.appendChild(inputBtn);

let storeTask = document.createElement('ul');
storeTask.id = 'store-task'
mainContainer.appendChild(storeTask);

inputBtn.addEventListener('click', writeTask());

function writeTask(){
    inputBtn.addEventListener('click', () => {
        let data = document.getElementById('input-task').value;
        let dataToP = document.createElement('p');
        dataToP.id = 'task-item';
        dataToP.innerText = data;
        document.getElementById('input-task').value = '';
        storeTask.appendChild(dataToP);
        
        let delItem = document.createElement('p');
        let delItemContent = document.createTextNode('Done');
        let taskElement = document.createElement('li');
        
        taskElement.setAttribute('class', 'li-tasks');
        taskElement.appendChild(dataToP);
        delItem.setAttribute('id', 'delete-task');
        
        delItem.appendChild(delItemContent);
        taskElement.appendChild(delItem);
        storeTask.appendChild(taskElement);

        delItem.addEventListener('click', () => {
            taskElement.remove();
        })
    })
}