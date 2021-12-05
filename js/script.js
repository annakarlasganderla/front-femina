$('.js-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding: true,
    margin: 28,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPuase: true,
    items: 3,
    navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
    responsive: {
        0: {
            items:1,
            nav: false
        },
        600: {
            items:2,
            nav: false
        },
        1000:{
            items:3,
            nav: true,
            loop: flase
        }
    }
})