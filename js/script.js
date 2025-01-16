// navbar code 
$(document).ready(function () {
    $('#menu_img').click(function () {
        $('.slide_nav').addClass('active');
        
    });
    $('.close').click(function () {
        $('.slide_nav').removeClass('active');
        $('.menu_btn').css('visibility', 'visible');

    });
});
// end 