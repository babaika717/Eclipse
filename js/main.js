document.addEventListener('DOMContentLoaded', function () {

    //FIRST
    $('.slides').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        dots: true,
        dotsClass: "my-dots"
    });

    //SECOND
    $('.carousel-inner').slick({
        autoplay: true,
        arrows: false,
        infinite: true,
        pauseOnHover: false,
        autoplaySpeed: 3000,
        dots: true,
        draggable: false,
        dotsClass: "my-dots"
    });

    //THIRD
    $('.carousel-start').slick({
        autoplay: true,
        arrows: true,
        infinite: true,
        pauseOnHover: false,
        draggable: false,
        autoplaySpeed: 3000,
        appendArrows: '.arrow',
        prevArrow: '<span class="slick-arrow slick-prev navigate"><img src="./assets/images/arrow-left.png"></span>',
        nextArrow: '<span class="slick-arrow slick-next navigate"><img src="./assets/images/arrow-right.png"></span>'
    });















});