// Custom javascript

const menuOptions = document.querySelectorAll('.menu-option');

document.getElementById('menu-button').addEventListener('click', function(){

	for(let i = 0; i < menuOptions.length; i++) {

		menuOptions[i].classList.toggle('isOpen');
	}

	document.querySelector('.trigram').classList.toggle('isHidden');

	document.querySelector('.x').classList.toggle('isHidden');

});
