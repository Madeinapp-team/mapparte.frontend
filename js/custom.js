//home page banner
$('.home-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    items: 1
})

$('.featured-slider').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
        },
        1200: {
            items: 5,
        }
    }
})

$('.testimonial-tiles').owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        1000: {
            items: 2,
        }
    }
})

$('.featured-img-slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    autoplay: false,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    navText: ["<img src='images/slider-wrrow.svg'>", "<img src='images/slider-wrrow.svg'>"],
    items: 1
})

//magazine detail page banner
$('.magazine-slider').slick({
    centerMode: true,
    centerPadding: '20rem',
    slidesToShow: 2,
    arrows: true,
    dots: true,
    responsive: [
        {
            breakpoint: 991,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '15rem',
                slidesToShow: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                centerPadding: '8rem',
                slidesToShow: 1
            }
        }
    ]
});

// // header height 
// $(window).on('load', function () {
//     var hheight = $("header").height();
//     $('.banner-wrapper').css({ 'padding-top': hheight });
// });

//on scroll add class
// $(window).scroll(function () {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 500) {
//         $(".header-wrapper").addClass("darkHeader");
//     } else {
//         $(".header-wrapper").removeClass("darkHeader");
//     }
// });

$(".navbar-toggler").click(function () {
    $('header').toggleClass("active");
});

//price range slider
$("#rangePrimary").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 1000,
    from: 200,
    to: 800,
    postfix: " €"
});

$(window).on('load', function () {
    $('.more-filter-btn, .more-filter-btn-overly').click(function () {
        $('.filter-options-wrapper').toggleClass('active');
        $('.more-filter-btn').toggleClass('active');
    });

    var viewPortWidth = $(window).width();
    if (viewPortWidth > 767) {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 100) {
                $(".filter-options-wrapper.active").removeClass("active");
                $(".more-filter-btn.active").removeClass("active");
            }
        });
    };
});

//input type num
function incrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal)) {
        parent.find('input[name=' + fieldName + ']').val(currentVal + 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

function decrementValue(e) {
    e.preventDefault();
    var fieldName = $(e.target).data('field');
    var parent = $(e.target).closest('div');
    var currentVal = parseInt(parent.find('input[name=' + fieldName + ']').val(), 10);

    if (!isNaN(currentVal) && currentVal > 0) {
        parent.find('input[name=' + fieldName + ']').val(currentVal - 1);
    } else {
        parent.find('input[name=' + fieldName + ']').val(0);
    }
}

$('.input-group').on('click', '.button-plus', function (e) {
    incrementValue(e);
});

$('.input-group').on('click', '.button-minus', function (e) {
    decrementValue(e);
});
