$('.nonloop').owlCarousel({
    freeDrag: false,
    autoWidth: true,
    autoHeight: true,
    loop: true,

});

$('.partners-nonloop').owlCarousel({
    loop: false,
    freeDrag: false,
    autoWidth: false,
    autoHeight: true,
    margin: 78,
    items: 3,
    responsive: {
        0 : {
            items: 1
        },
        450: {
            items: 2
        }
    }
});