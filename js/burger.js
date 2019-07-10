var menu = document.getElementById('mobmenu');
var open = false; 
function callmenu(){
	if (open==false) {
		menu.classList.add('mobile-menu-left');
		open=true;
	}
	else{
		menu.classList.remove('mobile-menu-left');
		open=false;
	}
}
var projects = document.getElementById('projects');
function showProjects(){
	projects.classList.remove('dnone');
}