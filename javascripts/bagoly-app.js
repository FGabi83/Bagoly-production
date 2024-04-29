/*import dropdownMenu from './modules/dropdownMenu';
import activeNavItem from './modules/activeNavItem';
import accordion from './modules/accordion';*/

function dropdownMenu() {
    const navMenu = document.querySelector(".js-nav--menu");
    const navWrapper = document.querySelector(".js-nav--wrapper");
      
    navMenu.addEventListener("click", () => { 
      navWrapper.classList.toggle("js-is-open");
      navMenu.classList.toggle("js-highlight");
    }); 
    
}

function activeNavItem() {
    let links = document.querySelectorAll('.js-nav--item');
    let path = window.location.pathname;
    let pathArray = path.split('/');
    let currentPath = pathArray[pathArray.length - 1];
    links.forEach(link => {
      let linkPath = link.getAttribute('href');
      let linkArray = linkPath.split('/');
      let linkCurrentPath = linkArray[linkArray.length - 1];
      let linkWithoutHtml = linkCurrentPath.split('.')[0];
      if (linkCurrentPath === currentPath || linkWithoutHtml === currentPath) {
         link.classList.add('js-nav--item__active');
         } else {
         link.classList.remove('js-nav--item__active');
      }
      
    });
}

function accordion() {
    const button = document.querySelector('.js-accordion--btn');
    const content = document.querySelector('.js-accordion--content');
    
    function toggleText() {
      if (button.textContent === 'Tovább') {
        button.textContent = 'Vissza';
      } else {
        button.textContent = 'Tovább';
      }
    }

    button.addEventListener('click', () => {
      content.classList.toggle('js-active');
      toggleText();
    });
    
  };

dropdownMenu();
activeNavItem();
accordion();

