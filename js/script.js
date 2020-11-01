$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        centerMode: true,
        centerPadding: '10px',
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    autoplay: true,
                    slidesToShow: 1,
                }
            },
        ]
    });
    $(".slick-slide").each(function (index) {
        $(this).css('margin-top',
            ($('.slider').height() - $(this).height()) / 2 + 'px');
    });
});
$(document).ready(function () {
    $('.square1, img_title1, img_number1').hover(function (event) {
        $('.square1 , .img_text1, .img_title1').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.square2, img_title2, img_number2').hover(function (event) {
        $('.square2 , .img_text2, .img_title2').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.square3, img_title3, img_number3').hover(function (event) {
        $('.square3 , .img_text3, .img_title3').toggleClass('active');
    });
});
$(document).ready(function () {
    $('.search_btn').click(function (event) {
        $('.search_input').addClass('active');
    });
});
$(document).ready(function () {
    $('.burger_box , .overlay').click(function (event) {
        $('.nav_burger, .overlay').toggleClass('active');
    });
});

