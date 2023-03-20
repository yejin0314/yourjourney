$(function(){
    $('.country_name li:nth-child(1)').click(function(){
        $('.j').css('display','flex');
        $('.d, .e, .n, .g').hide()
    });

    $('.country_name li:nth-child(2)').click(function(){
        $('.d').css('display','flex');
        $('.j, .e, .n, .g ').hide()
    });

    $('.country_name li:nth-child(3)').click(function(){
        $('.e').css('display','flex');
        $('.j, .d, .n, .g ').hide()
    });

    $('.country_name li:nth-child(4)').click(function(){
        $('.n').css('display','flex');
        $('.j, .d, .e, .g ').hide()
    });

    $('.country_name li:nth-child(5)').click(function(){
        $('.g').css('display','flex');
        $('.j, .d, .e, .n ').hide()
    });

  
});