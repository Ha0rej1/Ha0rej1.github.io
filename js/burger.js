var menu = document.getElementById('mobmenu');
var open = false;
var burger = document.getElementById('burgermen');
var noscroll = document.getElementById('no-scroll');

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
var inf = document.getElementById('inf');

function showinf() {
    inf.classList.remove('dnone');
        open = false;
    menu.classList.remove('mobile-menu-move');
    burger.classList.remove('menu-burger-move');
    noscroll.classList.remove('no-scroll');
}


/*function closemenu() {
    open = false;
    menu.classList.remove('mobile-menu-move');
    burger.classList.remove('menu-burger-move');
}
*/