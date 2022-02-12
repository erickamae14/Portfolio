(function($){
    "use strict"



$(window).scroll(function(){
    if($(this).scrollTop() > 200){
        $('.navbar').fadeIn('slow').css('display','flex');
    }else{
        $('.navbar').fadeOut('slow').css('.display', 'none')
    }
})


    //Typed Initiate
    if ($('.typed-text-output').length ==1){
        var typed_strings = $('typed-text').text();
        var typed = new Typed('.typed-text-output',{
            strings:typed_strings.split(', '),
            typedSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });
    };

$(document).ready(function () {


    let $btns = $('.project-area .button-group button');


    $btns.click(function (e) {

        $('.project-area .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.project-area .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.project-area .button-group #btn1').trigger('click');

    $('.project-area .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });


    // Owl-carousel

    $('.site-main .about-area .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            }
        }
    })

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    function navbarFixed() {
        if ($('.header_area').length) {
            $(window).scroll(function () {
                let scroll = $(window).scrollTop();
                if (scroll >= nav_offset_top) {
                    $('.header_area .main-menu').addClass('navbar_fixed');
                } else {
                    $('.header_area .main-menu').removeClass('navbar_fixed');
                }
            })
        }
    }

    navbarFixed();

});

})(jQuery);