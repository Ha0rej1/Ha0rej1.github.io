var menu = document.getElementById('mobnav');
var isOpened = false;
var burger = document.getElementById('burger');
function openmenu() {
	if(isOpened){
		isOpened = false;
		menu.classList.add("mobnavclosed");
		burger.classList.remove("burger-opened");
	}
	else{
		isOpened = true;
		menu.classList.remove("mobnavclosed");
		burger.classList.add("burger-opened");
	}
}