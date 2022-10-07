// IMPORTS
//import HtmlWebpackPlugin from 'html-webpack-plugin';
import './styles.css';
import './core-structure'
import { topNav, footer } from './core-structure';
import './home';
import { makeHome } from './home';
import './menu';
import { makeMenu } from './menu';


// -> REFERENCIA COMO CRIAR ELEMENTO E DAR APPEND EM ALGUM OUTRO ELEMENTO DA PÁG. <-
// let h1Node = document.createElement('h1');
// h1Node.id ='myid';
// h1Node.textContent = 'teste';
// container.appendChild(h1Node);

// located in core-structure.js | renders main div container, top navbar and footer
topNav();
footer();
makeHome('hidden');//NO ARGS = HOME VISIBLE *|* 'hidden' AS ARGS = HOME HIDDEN
makeMenu();

// export default mainDiv;