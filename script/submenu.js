$(function(){
    $('.nav1> ul> li').mouseenter(function(){
        $(this).children('.sub').stop().slideDown();
    });
    $('.nav1> ul> li').mouseleave(function(){
        $(this).children('.sub').stop().slideUp();
    });
});
$(function(){
    $('.hide').click(function(){
        $('.mainevent').hide();
    });
});