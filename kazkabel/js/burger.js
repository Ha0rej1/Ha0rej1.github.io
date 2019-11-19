var menu = document.getElementById('mob-nav-menu');
var burger = document.getElementById('burger');
var isOpen = false;

function openMenu(){
	if(!isOpen){
		menu.classList.add('mob-nav-menu-opened');
		burger.classList.add('burger-move');
		burger.classList.add('fa-times');
		burger.classList.remove('fa-bars');
		burger.classList.remove('burger-rotate-close');
		burger.classList.add('burger-rotate-open');
		isOpen = true;
	}
	else{
		menu.classList.remove('mob-nav-menu-opened');
		burger.classList.remove('burger-move');
		burger.classList.remove('fa-times');
		burger.classList.add('fa-bars');
		burger.classList.add('burger-rotate-close');
		burger.classList.remove('burger-rotate-open');
		isOpen = false; 
	}
}
function closeMenu(){
	if (!isOpen) {
		return;
	}
	else{
	menu.classList.remove('mob-nav-menu-opened');
	burger.classList.remove('burger-move');
	burger.classList.remove('fa-times');
	burger.classList.add('fa-bars');
	burger.classList.remove('burger-rotate-open');
	burger.classList.add('burger-rotate-close');
	isOpen = false; 	
	}
}