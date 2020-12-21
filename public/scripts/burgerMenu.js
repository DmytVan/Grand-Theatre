const header = document.getElementsByClassName('header')[0];
window.addEventListener('scroll', function () {
    if (pageYOffset > 100) {
        header.classList.add('header-active');
    } else {
        header.classList.remove('header-active');
    }
});

const burgerMenu = document.getElementById('burgerMenu');
const headerNav = document.getElementsByClassName('header-nav')[0];
burgerMenu.addEventListener('click', () => {
    headerNav.classList.add('header__nav-active');
    document.addEventListener('click', function closeBurger(e) {
            if (e.target === headerNav || e.target.closest('#burgerMenu')) return;
            headerNav.classList.remove('header__nav-active');
            document.removeEventListener('click', closeBurger)
    })
});
const closeHeaderNav = document.getElementById('closeHeaderNav');
