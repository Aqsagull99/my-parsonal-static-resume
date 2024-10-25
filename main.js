const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navIcon = document.getElementById('nav-icon');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    

    if (navMenu.classList.contains('active')) {
        navIcon.classList.replace('bx-grid-alt', 'bx-x'); 
    } else {
        navIcon.classList.replace('bx-x', 'bx-grid-alt'); 
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navIcon.classList.replace('bx-x', 'bx-grid-alt'); 
    });
});  










