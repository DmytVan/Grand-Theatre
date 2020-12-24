import './slider.js';
import './burgerMenu.js';
import './carousel.js'

$("#menu").on("click", "a", function (event) {
    event.preventDefault();
    const id = $(this).attr('href'),
        top = $(id).offset().top - 94;
    $('body,html').animate({scrollTop: top}, 1500);
});