// IMPORTS
import '../assets/styles/notes.css';
import { mainDiv } from './mainDiv';

export function notes(){
    //notes main div
    let notesDiv = document.createElement('div');
    notesDiv.id = 'notes-div';
    mainDiv.appendChild(notesDiv);

    //notes title
    let notesTitle = document.createElement('p');
    notesTitle.id = 'notes-title';
    notesTitle.textContent = 'Notes';
    notesDiv.appendChild(notesTitle);

    //notes textarea
    let notesTextArea = document.createElement('textarea');
    notesTextArea.id = 'notes-text';
    notesTextArea.cols = '10';
    notesTextArea.rows = '10';
    notesDiv.appendChild(notesTextArea);

}