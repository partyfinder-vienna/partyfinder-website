// JavaScript für das Hamburger-Menü
const menuIcon = document.querySelector('.menu-icon');
const menuLinks = document.querySelector('.menu-links');

menuIcon.addEventListener('click', () => {
  menuLinks.classList.toggle('show');
});
