//MAIN FILE, WILL LOAD MODULES/FUNCTIONS HERE

import './mainDiv';
import { mainContainer } from "./mainDiv";
import { notes } from './notes';
import './projects';
import { projectsSection } from "./projects";
import { toDos } from './todos';

mainContainer();
projectsSection();
toDos();
notes();