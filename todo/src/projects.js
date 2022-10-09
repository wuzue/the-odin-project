import { mainDiv } from "./mainDiv";
/*
    PROJECTS
+project 1
+project 2
...
*/
export function projectsSection(){
    let projectDiv = document.createElement('div');
    projectDiv.id = 'project-div';
    mainDiv.appendChild(projectDiv);

    let projectTitle = document.createElement('p');
    projectTitle.id = 'project-title';
    projectTitle.textContent = 'Projects';
    projectDiv.appendChild(projectTitle);

    //NEW PROJECT
    let newProject = document.createElement('p');
    newProject.id = 'new-project';
    newProject.textContent = 'New Project';
    projectDiv.appendChild(newProject);

}