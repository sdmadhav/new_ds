const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('header');

navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;

    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    header.classList.toggle('active');  // This will control header visibility


    navToggle.setAttribute('aria-expanded', !expanded);
    navMenu.setAttribute('aria-hidden', expanded);
});