// Custom javascript

const menuOptions = document.querySelectorAll('.menu-option');

const navbarMenu = document.querySelector('.navbar-menu');


document.getElementById('menu-button').addEventListener('click', function(){

	// if(navbarMenu.classList.contains('isHidden')){
	// 	navbarMenu.classList.remove('isHidden');
	// }
	// else{
	// 	setTimeout(navbarMenu.classList.add('isHidden'), 500);
	// };

	for(let i = 0; i < menuOptions.length; i++) {

		menuOptions[i].classList.toggle('isOpen');
	}

	document.querySelector('.trigram').classList.toggle('isHidden');

	document.querySelector('.x').classList.toggle('isHidden');

});
