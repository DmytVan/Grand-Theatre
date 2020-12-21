const rightBtn = document.getElementsByClassName('custom-slider-right-btn')[0];
rightBtn.addEventListener('click', () => {
    const topImg = document.getElementsByClassName('custom-slider-top-img')[0];
    const nextImg = document.querySelector('.custom-slider-top-img+img') ? document.querySelector('.custom-slider-top-img~img') : document.querySelector('.custom-slider > img');
    console.log(nextImg);
    topImg.addEventListener('animationend', () => {
        topImg.classList.remove('custom-slider-top-img');
        topImg.classList.remove('slide-out-left');
    });
    nextImg.addEventListener('animationend', () => {
        nextImg.classList.add('custom-slider-top-img');
        nextImg.classList.remove('slider-in-right');
    });
    topImg.classList.add('slide-out-left');
    nextImg.classList.add('slider-in-right');
});

const leftBtn = document.getElementsByClassName('custom-slider-left-btn')[0];
leftBtn.addEventListener('click', () => {
    const customSliderImgs = Array.from(document.querySelectorAll('.custom-slider > img'));
    const topImg = document.getElementsByClassName('custom-slider-top-img')[0];
    console.log(customSliderImgs.indexOf(topImg))
    const prevImg = customSliderImgs[(customSliderImgs.indexOf(topImg) === 0 ? customSliderImgs.length-1 : customSliderImgs.indexOf(topImg)-1)];
    topImg.addEventListener('animationend', () => {
        topImg.classList.remove('custom-slider-top-img');
        topImg.classList.remove('slide-in-left');
    });
    console.log(customSliderImgs.length)
    prevImg.addEventListener('animationend', () => {
        prevImg.classList.add('custom-slider-top-img');
        prevImg.classList.remove('slider-out-right');
    });
    topImg.classList.add('slide-in-left');
    prevImg.classList.add('slider-out-right');
});
