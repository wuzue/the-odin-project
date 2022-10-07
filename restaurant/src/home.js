import { container } from './core-structure';
import './core-structure';
import { homeLogo } from './files';
//import { compilation } from 'webpack';

//CREATE HOME CONTENT AND EXPORT IT TO BE LOADED FROM INDEX JS
export function makeHome(def){
    
    //HOME PAGE DIV
    let home = document.createElement('div');
    home.setAttribute('id', 'home')
    container.appendChild(home);

    //IF WHEN WE CALL IT AT INDEX.JS WE PASS 'hidden' AS ARG, IT HIDDENS, ELSE DOESNT
    if(def == 'hidden'){
        home.hidden = true;
    }else{
        home.hidden = false;
    }

    // HOME PAGE TITLE AND DESCRIPTION
    let homeTitle = document.createElement('h1');
    homeTitle.setAttribute('id', 'home-title');
    homeTitle.textContent = 'Bla Bla Restaurant';
    home.appendChild(homeTitle);

    let descTitle = document.createElement('p');
    descTitle.setAttribute('id', 'desc-title');
    descTitle.textContent = 'Home of the best Pizzas';
    home.appendChild(descTitle);

    let homeText = document.createElement('p');
    homeText.setAttribute('id', 'home-text');
    homeText.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, reiciendis asperiores?
    Harum similique, ipsam dolor necessitatibus repellat!`
    home.appendChild(homeText);

    let homeImg = document.createElement('img');
    homeImg.src = homeLogo;
    homeImg.setAttribute('id', 'logo1');
    home.appendChild(homeImg);

    let belowLogo = document.createElement('p');
    belowLogo.setAttribute('id', 'below-logo');
    belowLogo.textContent = `You order something, in less than 5 minutes it's ready!
    And you can order right from your home.`
    home.appendChild(belowLogo);

    let getInTouch = document.createElement('p');
    getInTouch.setAttribute('id', 'get-in-touch');
    getInTouch.textContent = `Here's how to get in touch with us:`;
    home.appendChild(getInTouch);

    let contactHomePage = document.createElement('div');
    contactHomePage.setAttribute('id', 'contact-home-page');
    home.appendChild(contactHomePage);

    let contactOne = document.createElement('p');
    contactOne.setAttribute('id', 'contact-home');
    contactOne.textContent = '000, NoOnes Ave., XX'
    contactHomePage.appendChild(contactOne);

    let contactTwo = document.createElement('p');
    contactTwo.setAttribute('id', 'contact-home');
    contactTwo.textContent = '+00 000 000 000'
    contactHomePage.appendChild(contactTwo);

    let contactThree = document.createElement('p');
    contactThree.setAttribute('id', 'contact-home');
    contactThree.textContent = 'XxXxx@xx.com'
    contactHomePage.appendChild(contactThree);
}