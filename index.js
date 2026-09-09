/*================ SHOW MENU ================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*================ REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/*================ SHADOW HEADER ================*/
const shadowHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

/*======================Email JS ====================*/

const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();

    emailjs.sendForm('service_ruv01q5','template_ke2gmwh','#contact-form','I4ah_kFhMLgmTqCNx')  
    .then(function () {
        contactMessage.textContent = 'Message sent successfully ✅';

        contactForm.reset();

        setTimeout(function () {
            contactMessage.textContent = '';
        }, 5000);
    })
    .catch(function (error) {
        console.error('EmailJS error:', error);
        contactMessage.textContent = 'Message not sent ❌';
    });
});
/*==================== SHOW SCROLL UP ====================*/
const scrollUp = document.getElementById('scroll-up');

if (scrollUp) {
    scrollUp.addEventListener('click', function (e) {
        e.preventDefault();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/*================ SCROLL SECTIONS ACTIVE LINK ================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector(
            `.nav__menu a[href="#${sectionId}"]`
        );

        if (!sectionLink) return;

        if (
            scrollDown > sectionTop &&
            scrollDown <= sectionTop + sectionHeight
        ) {
            sectionLink.classList.add('active-link');
        } else {
            sectionLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);

/*================ DARK LIGHT THEME ================*/

const themeButton = document.getElementById('theme-button');

const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme)
        ? 'ri-moon-line'
        : 'ri-sun-line';

if (selectedTheme === 'dark') {
    document.body.classList.add(darkTheme);
}

if (selectedIcon === 'ri-sun-line') {
    themeButton.classList.add(iconTheme);
}

themeButton.addEventListener('click', () => {

    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});