const menu = document.querySelector('.header .nav-bar .nav-list .menu');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const men_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 170) {
        header.style.backgroundColor = 'rgb(31, 30, 30)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});

men_item.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});