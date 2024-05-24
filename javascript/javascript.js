// ============ this is for the navbar =============
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuIcon.onclick = () => {
//  menuIcon.classList.toggle('bx-x');
//  navbar.classList.toggle('active');
// };

// ============ this is for the navbar =============
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', () => {
 navbarLinks.classList.toggle('active');
})

const navLinks = document.querySelectorAll('.navbar-links ul li a');

navLinks.forEach(link => {
 link.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
 });
});


let lastScrollTop = 0;
const navbar = document.querySelector('header');

window.addEventListener('scroll', () => {
 let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
 console.log('scrollTop:', scrollTop)

 if (scrollTop > lastScrollTop) {
  navbar.classList.add('hidden');
 } else {
  navbar.classList.remove('hidden');
 }
 lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
})