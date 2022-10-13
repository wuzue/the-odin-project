// IMPORTS
//import HtmlWebpackPlugin from 'html-webpack-plugin';
import './styles.css';
import './core-structure'
import { topNav, footer } from './core-structure';
import './home';
import { homeid, makeHome } from './home';
import './menu';
import { makeMenu } from './menu';
//import { container } from './core-structure';
import { menuItemOne, menuItemTwo } from './core-structure';
import { menuid } from "./menu";


// -> REFERENCIA COMO CRIAR ELEMENTO E DAR APPEND EM ALGUM OUTRO ELEMENTO DA PÁG. <-
// let h1Node = document.createElement('h1');
// h1Node.id ='myid';
// h1Node.textContent = 'teste';
// container.appendChild(h1Node);



// located in core-structure.js | renders main div container, top navbar and footer
topNav();
footer();
makeHome();//NO ARGS = HOME VISIBLE *|* 'hidden' AS ARGS = HOME HIDDEN
makeMenu();

//HIDE AND SHOW EITHER HOME OR MENU LOGIC
let gHome, gMenu;
gHome = menuItemOne;
gMenu = menuItemTwo;

menuid.hidden = true;//HIDDEN BY DEFAULT, SO MENU ALWAYS SHOWS UP AT FIRST.

gHome.addEventListener('click', () => {
    homeid.hidden = false;
    menuid.hidden = true;
});

gMenu.addEventListener('click', () => {
    menuid.hidden = false;
    homeid.hidden = true;
});

// export default mainDiv;
