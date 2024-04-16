/*function activeNavItem() {
  let links = document.querySelectorAll('.js-nav--item');
  let path = window.location.pathname;
  let pathArray = path.split('/');
  let currentPath = pathArray[pathArray.length - 1];
  
  links.forEach(link => {
    let linkPath = link.getAttribute('href');
    let linkArray = linkPath.split('/');
    let linkCurrentPath = linkArray[linkArray.length - 1];
    if (linkCurrentPath === currentPath) {
      link.classList.add('js-nav--item__active');
    }
  });

  
}

export default activeNavItem;*/

function activeNavItem() {
  let links = document.querySelectorAll('.js-nav--item');
  let path = window.location.pathname;
  let currentPath = path.slice(1); // Eltávolítjuk a vezető perjelet

  links.forEach(link => {
    let linkPath = link.getAttribute('href').slice(1); // Eltávolítjuk a vezető perjelet
    let linkWithoutExtension = linkPath.replace(".html", ""); // Eltávolítjuk a .html kiterjesztést
    if (linkWithoutExtension === currentPath || linkPath === currentPath || linkWithoutExtension + ".html" === currentPath || linkPath + ".html" === currentPath) {
      link.classList.add('js-nav--item__active');
    }
  });
}

export default activeNavItem;