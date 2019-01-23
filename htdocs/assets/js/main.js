// Custom javascript

const menuOptions = document.querySelectorAll('.menu-option');

const navbarMenu = document.querySelector('.navbar-menu');

function menuItemsToggle(){
  for(let i = 0; i < menuOptions.length; i++) {

    menuOptions[i].classList.toggle('isOpen');
	}
};

function closeMenu(){

  	menuItemsToggle();
  	setTimeout(function(){
      navbarMenu.classList.toggle('isHidden');
  	}, 350);

	document.querySelector('.trigram').classList.toggle('isHidden');

	document.querySelector('.x').classList.toggle('isHidden');


};

function toggleMenu() {

  if(navbarMenu.classList.contains('isHidden')){

	navbarMenu.classList.toggle('isHidden');

	setTimeout(menuItemsToggle, 50);

  }
  else {
    closeMenu();

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

navbarMenu.addEventListener('click', function(e){

  if(e.path[0].tagName === "LI"){
  	closeMenu();
  }
});

