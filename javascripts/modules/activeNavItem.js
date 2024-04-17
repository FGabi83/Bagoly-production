/*function activeNavItem() {
  let links = document.querySelectorAll('.js-nav--item');
  let path = window.location.pathname;
  let pathArray = path.split('/');
  let currentPath = pathArray[pathArray.length - 1];
  
  links.forEach(link => {
    let linkPath = link.getAttribute('href');
    let linkArray = linkPath.split('/');
    let linkCurrentPath = linkArray[linkArray.length - 1];
    console.log(linkCurrentPath);
    if (linkCurrentPath === currentPath || linkCurrentPath + ".html" === currentPath) {
      link.classList.add('js-nav--item__active');
    }
  });

  
}

export default activeNavItem;*/

function activeNavItem() {
  var currentPath = window.location.pathname;
  var navLinks = document.querySelectorAll('.js-nav--item');

  navLinks.forEach(function(link) {
    var href = link.getAttribute('href');
    if ((href === '/' && currentPath === '/') || 
      (href !== '/' && currentPath.startsWith(href.replace('.html', '')))) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

export default activeNavItem;