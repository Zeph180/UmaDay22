const hamburger = document.getElementById('ham');
const mobMenu = document.getElementById('mob-menu');
const nav = document.querySelector('#nav-bar');
const closeBtn = document.querySelector('.close-icon');

function openMenu() {
  mobMenu.style.display = 'block';
  nav.style.visibility = 'hidden';
}

function closeMenu() {
  mobMenu.style.display = 'none';
  nav.style.visibility = 'visible';
}

hamburger.addEventListener('click', openMenu);
closeBtn.addEventListener('click', closeMenu);