var menu = document.getElementById('mobmenu');
var open = false;
var burger = document.getElementById('burgermen');

function callmenu() {
    if (open == false) {
        open = true;
        menu.classList.add('mobile-menu-move');
        burger.classList.add('menu-burger-move')
    } else {
        open = false;
        menu.classList.remove('mobile-menu-move');
        burger.classList.remove('menu-burger-move');

    }
}
var projects = document.getElementById('projects');

function showProjects() {
    projects.classList.remove('dnone');
        open = false;
    menu.classList.remove('mobile-menu-move');
    burger.classList.remove('menu-burger-move');
}

/*function closemenu() {
    open = false;
    menu.classList.remove('mobile-menu-move');
    burger.classList.remove('menu-burger-move');
}
*/