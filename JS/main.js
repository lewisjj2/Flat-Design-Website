/*Drop Down Navigation*/
$(document).ready(function(){
    
    'use strict';
    
    $(".menu-icon").on("click", function (){
        $("nav ul").slideToggle(500);
        
    });
});

/*Smooth Scroll*/
$(document).ready(function () {

    'use strict';

    $('.nav-item').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});
    