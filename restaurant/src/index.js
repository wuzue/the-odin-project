// IMPORTS
//import HtmlWebpackPlugin from 'html-webpack-plugin';
import './styles.css';

// CREATE MAIN DIV ELEMENT
const mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.setAttribute('id', 'content')
let container = document.querySelector('#content');

// -> REFERENCIA COMO CRIAR ELEMENTO E DAR APPEND EM ALGUM OUTRO ELEMENTO DA PÁG. <-
// let h1Node = document.createElement('h1');
// h1Node.id ='myid';
// h1Node.textContent = 'teste';
// container.appendChild(h1Node);

// NO INDEX PRINCIPAL, DEIXAR SOMENTE O CORE DA PÁGINA,
// MENU, RODAPÉ, ETC... O RESTANTE SERÁ FEITO EM FUNÇÕES
// E SERÁ EXECUTADO APÓS A PÁG CARREGAR > window.onload = () => something

// CREATE TOP NAV
let topNav = document.createElement('nav');
topNav.setAttribute('id', 'top-nav');
container.appendChild(topNav);

//CREATE MENU ITEMS
let menuItemOne = document.createElement('a');
menuItemOne.setAttribute('href', '#')
menuItemOne.setAttribute('id', 'menu-items');
menuItemOne.textContent = 'Profile';
topNav.appendChild(menuItemOne);

let menuItemTwo = document.createElement('a');
menuItemTwo.setAttribute('href', '#');
menuItemTwo.setAttribute('id', 'menu-items');
menuItemTwo.textContent = "About Us";
topNav.appendChild(menuItemTwo);

let menuItemThree = document.createElement('a');
menuItemThree.setAttribute('href', '#');
menuItemThree.setAttribute('id', 'menu-items');
menuItemThree.textContent = 'Get in Touch';
topNav.appendChild(menuItemThree);

// CREATE FOOTER
let footer = document.createElement('footer');
footer.setAttribute('id', 'footer');
document.body.appendChild(footer)

let footerItemOne = document.createElement('p');
footerItemOne.setAttribute('id', 'footer-items');
footerItemOne.setAttribute('hhef', '#');
footerItemOne.textContent = 'TOP 2022'
footer.appendChild(footerItemOne);

let footerItemTwo = document.createElement('p');
footerItemTwo.setAttribute('id', 'footer-items');
footerItemTwo.setAttribute('hhef', '#');
footerItemTwo.textContent = 'made by ren'
footer.appendChild(footerItemTwo);

let footerItemThree = document.createElement('p');
footerItemThree.setAttribute('id', 'footer-items');
footerItemThree.setAttribute('hhef', '#');
footerItemThree.textContent = 'bla bla bla'
footer.appendChild(footerItemThree);

export default mainDiv;