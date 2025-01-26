$(function() {

    $('.slider__inner').slick({
        arrows: false,
        asNavFor: '.thumbs'
    });
    $('.thumbs').slick({
        arrows: false,
        slidesToShow: 6,
        slideToScrool: 6,
        asNavFor: '.slider__inner',
        focusOnSelect: true,
        responsive: [{
                breakpoint: 905,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 681,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 455,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 200,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.works__inner').slick({
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 950,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 515,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.header__menu-btn').on('click', function() {
        $('.header__menu > ul').slideToggle();
    });
    $('.header__drop-down.drop-down').on('click', function() {
        $(this).children('.drop-down__list').toggleClass('active');
        $(this).children('.drop-down__link').toggleClass('active');
    });

});