// Custom javascript

const menuOptions = document.querySelectorAll('.menu-option');

const navbarMenu = document.querySelector('.navbar-menu');

function menuItemsToggle(){
  for(let i = 0; i < menuOptions.length; i++) {

    menuOptions[i].classList.toggle('isOpen');
	}
}

function toggleMenu() {

  if(navbarMenu.classList.contains('isHidden')){

	navbarMenu.classList.toggle('isHidden');

	setTimeout(menuItemsToggle, 50);

  }
  else {
  	menuItemsToggle();

  	setTimeout(function(){
      navbarMenu.classList.toggle('isHidden');
  	}, 350);

  }

	document.querySelector('.trigram').classList.toggle('isHidden');

	document.querySelector('.x').classList.toggle('isHidden');

}

document.getElementById('menu-button').addEventListener('click', toggleMenu);

document.querySelector('.trigram').addEventListener('keypress', function(e){

	if(e.keyCode === 13){
		toggleMenu();
	}

});
