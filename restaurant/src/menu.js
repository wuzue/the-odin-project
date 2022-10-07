import { container } from './core-structure';
import './core-structure';
import { pepperoniPizza, calabresaPizza, portuguesaPizza } from './files';

//CREATE MENU CONTENT AND APPEND IT TO INDEX.JS
export function makeMenu(){
    let menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    container.appendChild(menu);

    let descMenu = document.createElement('p');
    descMenu.setAttribute('id', 'desc-menu');
    descMenu.textContent = 'Best East Side dishes! Only Here!'
    menu.appendChild(descMenu);

    let dishes = document.createElement('div');
    dishes.setAttribute('id', 'dishes');
    menu.appendChild(dishes);

    //PEPPERONI PIZZA
    let pepperoni = document.createElement('div');
    pepperoni.setAttribute('id', 'pepperoni');
    dishes.appendChild(pepperoni);

    let pepperoniTitle = document.createElement('p');
    pepperoniTitle.setAttribute('id', 'pepperoni-title');
    pepperoniTitle.textContent = 'Pepperoni Pizza';
    pepperoni.appendChild(pepperoniTitle);

    let pepperoniDesc = document.createElement('p');
    pepperoniDesc.setAttribute('id', 'pepperoni-desc');
    pepperoniDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Vero fugiat repellat placeat tempora 
    ducimus, saepe unde odio ullam quidem quasi 
    consectetur, soluta vitae?`;
    pepperoni.appendChild(pepperoniDesc);

    let pepperoniImg = document.createElement('img');
    pepperoniImg.src = pepperoniPizza;
    pepperoniImg.setAttribute('id', 'pepperoni-img');
    pepperoni.appendChild(pepperoniImg);

    // CALABRESA PIZZA
    let calabresa = document.createElement('div');
    calabresa.setAttribute('id', 'calabresa');
    dishes.appendChild(calabresa);

    let calabresaTitle = document.createElement('p');
    calabresaTitle.setAttribute('id', 'calabresa-title');
    calabresaTitle.textContent = 'Calabresa Pizza';
    calabresa.appendChild(calabresaTitle);

    let calabresaDesc = document.createElement('p');
    calabresaDesc.setAttribute('id', 'calabresa-desc');
    calabresaDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Vero fugiat repellat placeat tempora 
    ducimus, saepe unde odio ullam quidem quasi 
    consectetur, soluta vitae assumenda? Qui tempora
    nemo numquam doloremque molestias!`;
    calabresa.appendChild(calabresaDesc);

    let calabresaImg = document.createElement('img');
    calabresaImg.src = calabresaPizza;
    calabresaImg.setAttribute('id', 'calabresa-img');
    calabresa.appendChild(calabresaImg);

    //PORTUGUESA PIZZA
    let portuguesa = document.createElement('div');
    portuguesa.setAttribute('id', 'portuguesa');
    dishes.appendChild(portuguesa);

    let portuguesaTitle = document.createElement('p');
    portuguesaTitle.setAttribute('id', 'portuguesa-title');
    portuguesaTitle.textContent = 'Portuguesa Pizza';
    portuguesa.appendChild(portuguesaTitle);

    let portuguesaDesc = document.createElement('p');
    portuguesaDesc.setAttribute('id', 'portuguesa-desc');
    portuguesaDesc.textContent = `Lorem ipsum dolor sit amet, consectetur adipisicing
    elit. Vero fugiat repellat placeat tempora 
    ducimus, saepe unde odio ullam quidem quasi 
    consectetur, soluta vitae assumenda? Qui tempora
    nemo numquam doloremque molestias!`;
    portuguesa.appendChild(portuguesaDesc);

    let portuguesaImg = document.createElement('img');
    portuguesaImg.src = portuguesaPizza;
    portuguesaImg.setAttribute('id', 'portuguesa-img');
    portuguesa.appendChild(portuguesaImg);
}