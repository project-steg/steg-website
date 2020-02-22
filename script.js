$(window).scroll(function(){
    var top1 = $(".about-wrapper").offset().top;
    var position1 = top1 - $(window).height();
    var top2 = $(".partners-wrapper").offset().top;
    var position2 = top2 - $(window).height();
    var top3 = $(".members-wrapper").offset().top;
    var position3 = top3 - $(window).height();
    var top4 = $(".contact-wrapper").offset().top;
    var position4 = top4 - $(window).height();
    
    if($(window).scrollTop() > position1){
        $('.list-about a').css('color', '#20d8ba');
    }else{
        $('.list-about a').css('color', '#404040');
    }

    if($(window).scrollTop() > position2){
        $('.list-about a').css('color', '#404040');
        $('.list-partners a').css('color', '#20d8ba');
    }else{
        $('.list-partners a').css('color', '#404040');
    }

    if($(window).scrollTop() > position3){
        $('.list-partners a').css('color', '#404040');
        $('.list-members a').css('color', '#20d8ba');
    }else{
        $('.list-members a').css('color', '#404040');
    }

    if($(window).scrollTop() > position4){
        $('.list-members a').css('color', '#404040');
        $('.list-contact a').css('color', '#20d8ba');
    }else{
        $('.list-contact a').css('color', '#404040');
    }

});