// Custom javascript

const menuOptions = document.querySelectorAll('.menu-option');

function openMenu() {
	for(let i = 0; i < menuOptions.length; i++) {

		menuOptions[i].classList.toggle('isOpen');
	}

	document.querySelector('.trigram').classList.toggle('isHidden');

	document.querySelector('.x').classList.toggle('isHidden');

}

document.getElementById('menu-button').addEventListener('click', openMenu);

document.querySelector('.trigram').addEventListener('keypress', function(e){

	if(e.keyCode === 13){
		openMenu();
	}

});
