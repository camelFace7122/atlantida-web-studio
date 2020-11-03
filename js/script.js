$(document).ready(function(){
    $('.main-slider').slick({
    });

    function ibg(){
        $.each($('.ibg'), function(index, val) {
            if($(this).find('img').lenght>0){
                $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
            }
        });
    }
    ibg();

    $('.testimonials').slick({
        dots: true,
        arrows: false,
        fade: true,
        speed: 1000,
        waitForAnimate: false,
        autoplay: true,
        autoplaySpeed: 6000,
    });


    var sizer = '.portfolio__item';
    
    var container = $('.portfolio__tiles');
    
    container.imagesLoaded(function(){
        container.masonry({
            itemSelector: '.portfolio__item',
            columnWidth: sizer,
            percentPosition: true,
            horizontalOrder: true,
        })
    })
    
    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keyup', function(){
    if(this.scrollTop > 0){
        this.style.height = this.scrollHeight + "px";
    }
    });

    inputPlaceholder( document.getElementById('some_input'))

});
    
$('.top-menu__icon').click(function(event) {
    $(this).toggleClass('active');
    $('.top-menu__menu').toggleClass('active');
    if($(this).hasClass('active')){
        $('body').data('scroll',$(window).scrollTop());
    }
        $('body').toggleClass('lock');
    if(!$(this).hasClass('active')){
        $('body,html').scrollTop(parseInt($('body').data('scroll')));
    }
}); 

function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').lenght>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();