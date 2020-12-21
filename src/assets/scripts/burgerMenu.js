const header = document.getElementsByClassName('header')[0];
window.addEventListener('scroll', function() {
    if (pageYOffset > 100 ) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

const burgerMenu = document.getElementById('burgerMenu');
const headerNav = document.getElementsByClassName('header-nav')[0];
burgerMenu.onclick = function () {
    headerNav.classList.add('header__nav-header-nav-active');
};
const closeHeaderNav = document.getElementById('closeHeaderNav');
document.onclick = function (e) {
    if (e.target === headerNav || e.target === burgerMenu) return;
    headerNav.classList.remove('header-nav-active-active');
};