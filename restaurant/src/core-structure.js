export let container;

export let menuItemOne;
export let menuItemTwo;

// CREATE FOOTER
export function topNav(){
    // CREATE MAIN DIV ELEMENT
    const mainDiv = document.createElement('div');
    document.body.appendChild(mainDiv);
    mainDiv.setAttribute('id', 'content')
    container = document.getElementById('content');

    // CREATE TOP NAV
    let topNav = document.createElement('nav');
    topNav.setAttribute('id', 'top-nav');
    container.appendChild(topNav);

    //CREATE MENU ITEMS
    menuItemOne = document.createElement('a');
    menuItemOne.setAttribute('href', '#')
    menuItemOne.setAttribute('id', 'menu-items');
    menuItemOne.textContent = 'Home';
    topNav.appendChild(menuItemOne);

    menuItemTwo = document.createElement('a');
    menuItemTwo.setAttribute('href', '#');
    menuItemTwo.setAttribute('id', 'menu-items');
    menuItemTwo.textContent = "Menu";
    topNav.appendChild(menuItemTwo);

    let menuItemThree = document.createElement('a');
    menuItemThree.setAttribute('href', '#');
    menuItemThree.setAttribute('id', 'menu-items');
    menuItemThree.textContent = 'Contact';
    topNav.appendChild(menuItemThree);

    
};

export function footer(){
    //CREATE FOOTER AND FOOTER ITEMS
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

};



// export function setupCoreStructure();